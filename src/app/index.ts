const config = require('../config');

import Koa from 'koa';
import router from './api';

const app = new Koa();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(config.httpPort, () => {
  console.log(`Koa, port:${config.httpPort}`);
});
