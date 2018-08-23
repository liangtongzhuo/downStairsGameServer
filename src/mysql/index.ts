import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  dialect: 'mysql',
  port: 3306,
  host: '132',
  database: '123',
  username: '123',
  password: '123',
  // modelPaths: [__dirname + '/models'],
});

sequelize
  .sync({ force: true })
  .then(async () => {
    console.log('Mysql connection: success');
  })
  .catch(() => {
    console.error('Mysql connection: error');
  });
