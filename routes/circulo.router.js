import { Router } from 'express';
import {
  crearCirculo,
  obtenerCirculo,
  obtenerTodosCirculos,
  acualizarCirculo,
  borrarCirculo,
} from '../controllers/circulo.controller.js';

const router = Router();

router.post('/crear', crearCirculo);
router.get('/obtener/:id', obtenerCirculo);
router.get('/obtenerTodos', obtenerTodosCirculos);
router.put('/actualizar/:id', acualizarCirculo);
router.delete('/borrar/:id', borrarCirculo);

export default router;
