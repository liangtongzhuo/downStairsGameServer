import * as WebSocket from 'ws';

export const message = async (data: WebSocket.Data) => {
  console.log('wsMessage: %s', data);

  
};
