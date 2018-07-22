import FloorModel from '../model/floor-model';
import WS from '../base/ws';

export default class Map {
  /**
   * 地图数据
   */
  public mapData = {
    mesName: 'initMap',
    floors: [new FloorModel(0, 0, 0)],
  };
  /**
   * 地图展示时间
   */
  private showTime = 3 * 60 * 1000;
  /**
   * 每一块瓷砖之间的时间间隔
   */
  private floorTime = 700;

  constructor() {
    this.initMap;
    setInterval(() => {
      this.initMap;
    }, 3 * 60 * 1000);
  }

  public send(ws: WS){
    ws.send(JSON.stringify(this.mapData), (error: Error) => {
      if (error) console.log('发送 error:', error);
    });
  }

  private initMap() {
    const date = Date.now();
    const floors: FloorModel[] = [];
    for (let index = 0; index < this.showTime / this.floorTime; index++) {
      const floor = new FloorModel(date + index * this.floorTime, Math.random(), index % 2);
      floors.push(floor);
    }

    this.mapData.floors = floors;
  }
}
