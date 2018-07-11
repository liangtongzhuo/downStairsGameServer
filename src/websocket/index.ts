import * as WebSocket from 'ws';
import * as http from 'http';
const wss = new WebSocket.Server({ port: 3002 }, () => {
  console.log('socket server start, port:' + 3002);
});
// wss 服务器启动失败
wss.on('error', (error: Error) => {
  console.log('wss server error:' + error);
});

// 有 socket 连接
wss.on('connection', async (ws: WebSocket, req: http.IncomingMessage) => {
  console.log('ip:', req.headers.host);
  console.log('url:', req.url);

  ws.on('message', (data: WebSocket.Data) => {
    console.log('received: %s', data);
  });

  ws.on('error', (err: Error) => {
    console.log('wsError:', err);
  });

  ws.on('close', (code: number, message: string) => {
    console.log('wsClose:', code, message);
  });

  //发送消息
  ws.send('{}', (error: Error) => {
    if (error) console.log('发送 error:', error);
  });
});
