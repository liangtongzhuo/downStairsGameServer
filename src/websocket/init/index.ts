import * as http from 'http';
import WS from "../model/ws";

export const init = async (ws: WS, req: http.IncomingMessage) => {
  ws.userId = 'aaaaaa';
  console.log('ip:', req.headers.host);
  console.log('url:', req.url);
};
