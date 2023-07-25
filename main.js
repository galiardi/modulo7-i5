import { Rectangulo } from './models/Rectangulo.js';

// const rectangulo = new Rectangulo({ x: 55, y: 11 });
// console.log(rectangulo);
// await rectangulo.crear();

// await Rectangulo.obtenerTodos();

// await Rectangulo.obtener(2);

const updatedRectangulo = new Rectangulo({ x: 500, y: 700, id: 6 });
await updatedRectangulo.actualizar();
