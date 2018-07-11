import Koa from 'koa';
const app = new Koa();
app.listen(3001, () => {
  console.log('Koa, port:3001');
});