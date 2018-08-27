const config = require('../config');

import * as WebSocket from 'ws';
import * as http from 'http';
import WS from './base/ws';
import { init } from './init';
import { message } from './message';
import { broadcast } from './broadcast';
import DataBus from '../dataStatus/DataBus';
const dataBus = new DataBus();

const wss = new WebSocket.Server({ port: config.webSocketPort }, () => {
  console.log(`socket server start, port:${config.webSocketPort}`);
});
// wss 服务器启动失败
wss.on('error', (error: Error) => {
  console.log('wss server error:' + error);
});

// socket 连接
wss.on('connection', async (ws: WS, req: http.IncomingMessage) => {
  // 初始化一些东西
  init(ws, req);

  // 处理收到的消息
  ws.on('message', (data: string) => message(ws, data));

  // 错误信息
  ws.on('error', async (error: Error) => {
    delete dataBus.users[ws.userId];
    console.log('wsError: %s', ws.userId, error);
  });

  // 关闭以后清理信息
  ws.on('close', async (code: number, message: string) => {
    delete dataBus.users[ws.userId];
    console.log('wsClose:', ws.userId, code, message);
  });

  // 广播任务
  setInterval(() => {
    broadcast(wss, {
      actionName: 'user',
      users: dataBus.users,
    });
  }, 1000);
});
