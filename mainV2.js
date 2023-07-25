import { Rectangulo } from './models/RectanguloV2.js';

// const rectangulo = new Rectangulo({ x: 5, y: 10 });

// await rectangulo.crear();

// await Rectangulo.obtenerTodos();

// await Rectangulo.obtener(2);

const updatedRectangulo = new Rectangulo({ x: 123, y: 321 });
await updatedRectangulo.actualizar(6);
