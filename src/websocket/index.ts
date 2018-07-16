import * as WebSocket from 'ws';
import * as http from 'http';
import WS from './model/ws';
import { init } from './init';
import { message } from './message';
import { error } from './error';
import { close } from './close';
import { broadcast } from './broadcast';

const wss = new WebSocket.Server({ port: 3002 }, () => {
  console.log('socket server start, port:' + 3002);
});
// wss 服务器启动失败
wss.on('error', (error: Error) => {
  console.log('wss server error:' + error);
});

// socket 连接
wss.on('connection', async(ws: WebSocket, req: http.IncomingMessage) => {
  // 初始化一些东西
  init(ws as WS, req);

  // 处理收到的消息
  ws.on('message', (data: string) => message(data, ws as WS));

  // 错误信息
  ws.on('error', (err: Error) => error(err));

  // 关闭以后清理信息
  ws.on('close', (code: number, message: string) => close(code, message));

  // 广播任务
  // setInterval(() => {
  //   broadcast(wss, {
  //     widthRandom: Math.random(),
  //   });
  // }, 1000);
});
