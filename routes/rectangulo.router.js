import { Router } from 'express';
import {
  crearRectangulo,
  obtenerRectangulo,
  obtenerTodosRectangulos,
  actualizarRectangulo,
  borrarRectangulo,
} from '../controllers/rectangulo.controller.js';

const router = Router();

router.post('/crear', crearRectangulo);
router.get('/obtener/:id', obtenerRectangulo);
router.get('/obtener-todos', obtenerTodosRectangulos);
router.put('/actualizar/:id', actualizarRectangulo);
router.delete('/borrar/:id', borrarRectangulo);

export default router;
