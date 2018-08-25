import * as http from 'http';
import WS from "../base/ws";

export const init = async (ws: WS, req: http.IncomingMessage) => {
  console.log('ip:', req.headers.host);
  console.log('url:', req.url);
};
