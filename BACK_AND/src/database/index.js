import Sequelize from 'sequelize';

import configDatabase from '../config/databases';
import User from '../app/models/User';
import Student from '../app/models/Students';
import Plano from '../app/models/Planos';
import Matricula from '../app/models/Matriculas';

const models = [User, Student, Plano, Matricula];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(configDatabase);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
