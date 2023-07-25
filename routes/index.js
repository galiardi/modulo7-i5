import { Router } from 'express';
import rectanguloRouter from './rectangulo.router.js';
// import trianguloRouter from './triangulo.router.js';
// import circuloRouter from './circulo.router.js';

const router = Router();

router.use('/rectangulo', rectanguloRouter);
// router.use('/triangulo', trianguloRouter);
// router.use('/circulo', circuloRouter);

export default router;
