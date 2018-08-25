export default class FloorModel {
  private widthRandom = 0;
  private y = 0;
  private type = 0;

  constructor(widthRandom: number, y: number, type: number) {
    this.widthRandom = widthRandom;
    this.y = y;
    this.type = type;
  }
}
