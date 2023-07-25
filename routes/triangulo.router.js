import { Router } from 'express';
import {
  crearTriangulo,
  obtenerTriangulo,
  obtenerTodosTriangulos,
  acualizarTriangulo,
  borrarTriangulo,
} from '../controllers/triangulo.controller.js';

const router = Router();

router.post('/crear', crearTriangulo);
router.get('/obtener/:id', obtenerTriangulo);
router.get('/obtenerTodos', obtenerTodosTriangulos);
router.put('/actualizar/:id', acualizarTriangulo);
router.delete('/borrar/:id', borrarTriangulo);

export default router;
