import WS from '../base/ws';
import Map from './map';

const map = new Map();

export const message = async (data: string, ws: WS) => {
  console.log('wsMessage: %s', data);
  const obj = JSON.parse(data) as any;
  if (obj.mesName === 'initMap') map.send(ws);
};
