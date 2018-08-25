import { Sequelize } from 'sequelize-typescript';
// import UserModel from './models/UserModel';

const config = require('../config');
config.mysql.modelPaths = [__dirname + '/models'];

const sequelize = new Sequelize(config.mysql);
sequelize
  .sync({ force: false })
  .then(async () => {
    // const user = await UserModel.aaa();
    console.log('Mysql connection: success');
  })
  .catch(error => {
    console.error('Mysql connection: error', error);
  });
