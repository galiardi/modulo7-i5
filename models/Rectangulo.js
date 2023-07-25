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
  constructor({ id, x, y, state }) {
    this.id = id;
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
      console.log('crear rectangulo error: ', error.message);
      return null;
    }
  }

  static async obtenerTodos() {
    try {
      await rectanguloModel.sync();
      const data = await rectanguloModel.findAll();
      const rectangulos = data.map((result) => {
        return result.dataValues;
      });
      console.table(rectangulos);
    } catch (error) {
      console.log(error);
    }
  }

  static async obtener(id) {
    try {
      await rectanguloModel.sync();
      const result = await rectanguloModel.findByPk(id);
      console.log(result.dataValues);
    } catch (error) {
      console.log(error);
    }
  }

  async actualizar() {
    try {
      await rectanguloModel.sync();
      const result = await rectanguloModel.update(this, {
        where: { id: this.id },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
}

export { Rectangulo };
