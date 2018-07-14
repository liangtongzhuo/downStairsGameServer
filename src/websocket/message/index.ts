import * as WebSocket from 'ws';
import FloorModel from '../model/floor-model';
export const message = async (data: string, ws: WebSocket) => {
  console.log('wsMessage: %s', data);
  const obj = JSON.parse(data) as any;

  if (obj.mesName === 'initMap') initMap(ws);
};

/**
 * 创地图
 */
const initMap = (ws: WebSocket) => {
  const date = Date.now();
  const floors: FloorModel[] = [];
  for (let index = 0; index < 100; index++) {
    const floor = new FloorModel(date + index * 700, Math.random(), index%2);
    floors.push(floor);
  }

  const sendData = {
    mesName: 'initMap',
    floors,
  };
  ws.send(JSON.stringify(sendData), (error: Error) => {
    if (error) console.log('发送 error:', error);
  });
};
