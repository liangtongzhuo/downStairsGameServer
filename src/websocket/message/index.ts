import WS from '../base/ws';

export const message = async (data: string, ws: WS) => {
  // console.log('wsMessage: %s', data);
  const obj = JSON.parse(data) as any;

};
