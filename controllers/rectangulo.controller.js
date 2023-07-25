import { Rectangulo } from '../models/RectanguloV2.js';

async function crearRectangulo(req, res) {
  const response = {
    message: 'Crear rectángulo',
    data: null,
    error: null,
  };
  const { x, y } = req.body;
  if (!x || !y) {
    response.error = 'Faltan parámetros';
    return res.status(400).send(response);
  }

  const rectangulo = new Rectangulo({ x, y });
  const result = await rectangulo.crear();

  if (result === false) {
    response.error = 'Error creando el rectángulo';
    return res.status(500).send(response);
  }

  response.data = result;
  return res.status(201).send(response);
}

async function obtenerTodosRectangulos(req, res) {
  const response = {
    message: 'Obtener todos los rectángulos',
    data: null,
    error: null,
  };

  const result = await Rectangulo.obtenerTodos();

  if (result === false) {
    response.error = 'Error obteniendo la información';
    return res.status(500).send(response);
  }

  response.data = result;
  return res.status(200).send(response);
}

async function obtenerRectangulo(req, res) {
  const response = {
    message: 'Obtener rectángulo',
    data: null,
    error: null,
  };

  const { id } = req.params;

  const result = await Rectangulo.obtener(id);

  if (result === false) {
    response.error = 'Error obteniendo la información';
    return res.status(500).send(response);
  }

  response.data = result;
  return res.status(200).send(response);
}

async function actualizarRectangulo(req, res) {
  const response = {
    message: 'Actualizar rectángulo',
    data: null,
    error: null,
  };

  const { id } = req.params;
  const { x, y } = req.body;

  if (!x || !y) {
    response.error = 'Faltan parámetros';
    return res.status(400).send(response);
  }

  const rectangulo = new Rectangulo({ x, y });
  const result = await rectangulo.actualizar(id);

  if (result === false) {
    response.error = 'Error actualizando el rectángulo';
    return res.status(500).send(response);
  }

  if (result === 0) {
    response.error = 'El registro no existe';
    return res.status(404).send(response);
  }

  response.data = true;
  return res.status(200).send(response);
}

async function borrarRectangulo(req, res) {
  const response = {
    message: 'Borrar rectángulo',
    data: null,
    error: null,
  };

  const { id } = req.params;

  const result = await Rectangulo.borrar(id);

  if (result === false) {
    response.error = 'Error borrando el registro';
    return res.status(500).send(response);
  }

  if (result === 0) {
    response.error = 'El registro no existe';
    return res.status(404).send(response);
  }

  response.data = true;
  return res.status(200).send(response);
}

export {
  crearRectangulo,
  obtenerRectangulo,
  obtenerTodosRectangulos,
  actualizarRectangulo,
  borrarRectangulo,
};
