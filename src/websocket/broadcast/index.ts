import * as WebSocket from 'ws';

/**
 * 广播发送
 * @param wss 
 * @param obj 
 */
export const broadcast = async (wss: WebSocket.Server, obj: any) => {
  wss.clients.forEach(ws => {
    send(ws as WebSocket, obj);
  });
};

/**
 * 发送
 * @param ws 
 * @param obj 
 */
const send = (ws: WebSocket, obj: any) => {
  if (ws.readyState === ws.OPEN) {
    ws.send(JSON.stringify(obj), (error: Error) => {
      if (error) console.log('发送 error:', error);
    });
  }
};
