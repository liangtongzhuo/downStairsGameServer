import * as WebSocket from 'ws';
import * as http from 'http';

export const init = async (ws: WebSocket, req: http.IncomingMessage) => {
  console.log('ip:', req.headers.host);
  console.log('url:', req.url);
};
