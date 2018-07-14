export default class FloorModel {
  private drawTime = 0;
  private widthRandom = 0;
  private type = 0;

  constructor(drawTime: number, widthRandom: number, type: number) {
    this.drawTime = drawTime;
    this.widthRandom = widthRandom;
    this.type = type;
  }
}
