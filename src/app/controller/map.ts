import Koa from 'koa';
import FloorModel from '../model/FloorModel';

/**
 * @returns 返回地图初始化
 * @param ctx
 * @param next
 */
const mapInit = async (ctx: Koa.Context, next: () => Promise<any>) => {
  const date = Date.now();
  const floors: FloorModel[] = [];
  for (let index = 0; index < 300; index++) {
    const floor = new FloorModel(Math.random(), index * 50, index % 2);
    floors.push(floor);
  }
  const body = {
    floors,
    date,
  };
  ctx.body = body;
  await next();
};

export default mapInit;
