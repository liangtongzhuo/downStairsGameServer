module.exports = {
  mysql: {
    dialect: 'mysql',
    port: 10010,
    host: 'cdb-45ua41re.cd.tencentcdb.com',
    database: 'games',
    username: 'root',
    password: 'daoJ8hao',
    modelPaths: [__dirname + '/models'],
    timezone: '+08:00',
    logging: (sql: any) => {
      console.log(sql);
    },
  },
};
