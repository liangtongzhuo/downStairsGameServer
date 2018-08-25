const config = require('../config');
import Koa from 'koa';

import router from './api';
import logger from './middlewares/logger';
import bodyParser from 'koa-bodyparser';
import cors from 'koa-cors';


const app = new Koa();

// 打印请求时间中间件
app.use(logger);
// 跨域
app.use(cors())
// 解析 bodyParser 中间件
app.use(bodyParser());
// 主要的 api
app.use(router.routes());
// 路由设置一些请求头
app.use(router.allowedMethods());

app.listen(config.httpPort, () => {
  console.log(`Koa, port:${config.httpPort}`);
});
