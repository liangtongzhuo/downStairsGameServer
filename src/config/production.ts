module.exports = {
  mysql: {
    database: 'local-riot-match',
    username: 'root',
    password: 'password',
    options: {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      timezone: '+08:00',
      // logging: sql => {},
      operatorsAliases: false,
    },
  },
};