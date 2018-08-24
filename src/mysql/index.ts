const config = require('../config');
import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize(config.mysql);
sequelize
  .sync({ force: true })
  .then(async () => {
    console.log('Mysql connection: success');
  })
  .catch(() => {
    console.error('Mysql connection: error');
  });
