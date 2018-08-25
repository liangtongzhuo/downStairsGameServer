import Koa from 'koa';

export default async (ctx: Koa.Context, next: () => Promise<any>) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  if ('development' == process.env.NODE_ENV) {
    console.log('%s %s - %sms', ctx.method, ctx.url, ms);
  }
};
