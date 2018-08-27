import * as http from 'http';
import WS from '../base/ws';
import url from 'url';

export const init = async (ws: WS, req: http.IncomingMessage) => {
  const query = url.parse(req.url || '', true).query;
  if (!query.userId) {
    ws.send('缺少参数');
    ws.close();
  }

  ws.userId = query.userId as string;
  console.log('ws connected:', req.headers.host, req.url);
};
