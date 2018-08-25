const config = require('../config');

import Koa from 'koa';
import router from './api';
import bodyParser from 'koa-bodyparser';

const app = new Koa();

app.use(async function logger(ctx, next) {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  if ('development' == process.env.NODE_ENV) {
    console.log('%s %s - %s', ctx.method, ctx.url, ms);
  }
});
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(config.httpPort, () => {
  console.log(`Koa, port:${config.httpPort}`);
});
