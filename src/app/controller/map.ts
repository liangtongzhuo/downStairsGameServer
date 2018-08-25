import Koa from 'koa';

const mapInit = (ctx: Koa.Context, next: () => Promise<any>) => {
  ctx.body = 123;

  //   const date = Date.now();
  //   const floors: FloorModel[] = [];
  //   for (let index = 0; index < 300; index++) {
  //     const floor = new FloorModel(Math.random(), index * 50, index % 2);
  //     floors.push(floor);
  //   }

  //   this.mapData.floors = floors;
  //   this.mapData.date = date;
};

export default mapInit;
