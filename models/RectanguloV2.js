import { DataTypes } from 'sequelize';
import { db } from '../db.js';

const rectanguloModel = db.define('Rectangulo', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  x: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  y: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  state: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});

class Rectangulo {
  constructor({ x, y, state = 1 }) {
    this.x = x;
    this.y = y;
    this.state = state;
  }

  async crear() {
    try {
      await rectanguloModel.sync();
      const { dataValues } = await rectanguloModel.create(this);
      return dataValues;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }

  static async obtenerTodos() {
    try {
      await rectanguloModel.sync();
      const data = await rectanguloModel.findAll({
        where: { state: 1 },
      });
      const rectangulos = data.map((result) => {
        return result.dataValues;
      });
      return rectangulos;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }

  static async obtener(id) {
    try {
      await rectanguloModel.sync();
      const result = await rectanguloModel.findOne({ where: { id: id, state: 1 } });
      return result;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }

  async actualizar(id) {
    try {
      await rectanguloModel.sync();
      const [result] = await rectanguloModel.update(this, {
        where: { id: id, state: 1 },
      });
      return result;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }

  static async borrar(id) {
    try {
      await rectanguloModel.sync();
      const [result] = await rectanguloModel.update(
        { state: 0 },
        {
          where: { id: id, state: 1 },
        }
      );
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export { Rectangulo };
