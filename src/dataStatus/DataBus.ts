/**
 * 全局状态管理器，单例
 */

export default class DataBus {
  private static instance = new DataBus();

  public users: {
    [key: string]: {
      userId: string;
      x: number;
      y: number;
    };
  } = {};

  constructor() {
    return DataBus.instance;
  }
}
