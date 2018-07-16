import * as WebSocket from 'ws';
/**
 * 增加了一个 userId
 */
export default interface WS extends WebSocket {
  userId: string
};
