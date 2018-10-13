import Koa from 'koa';
import FloorModel from '../model/FloorModel';
let date = Date.now();
let floors: FloorModel[] = [];

/**
 * @returns 返回地图初始化
 * @param ctx
 * @param next
 */
const mapInit = async (ctx: Koa.Context, next: () => Promise<any>) => {
  const body = {
    floors,
    date,
  };
  ctx.body = body;
  await next();
};

export default mapInit;


const setIntervalInit = () => {
  date = Date.now();
  floors = [];

  for (let index = 0; index < 100; index++) {
    const floor = new FloorModel(Math.random(), index * 50, index % 2);
    floors.push(floor);
  }
};
setIntervalInit();
setInterval(setIntervalInit, 1 * 60 * 1000);


