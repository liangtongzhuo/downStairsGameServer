const config = require('../config');

import * as WebSocket from 'ws';
import * as http from 'http';
import WS from './base/ws';
import { init } from './init';
import { message } from './message';
import { error } from './error';
import { close } from './close';
import { broadcast } from './broadcast';

const wss = new WebSocket.Server({ port: config.webSocketPort }, () => {
  console.log(`socket server start, port:${config.webSocketPort}`);
});
// wss 服务器启动失败
wss.on('error', (error: Error) => {
  console.log('wss server error:' + error);
});

// socket 连接
wss.on('connection', async (ws: WebSocket, req: http.IncomingMessage) => {
  // 初始化一些东西
  init(ws as WS, req);

  // 处理收到的消息
  ws.on('message', (data: string) => message(data, ws as WS));

  // 错误信息
  ws.on('error', error);

  // 关闭以后清理信息
  ws.on('close', close);

  // 广播任务
  // setInterval(() => {
  //   broadcast(wss, {
  //     widthRandom: Math.random(),
  //   });
  // }, 1000);
});
