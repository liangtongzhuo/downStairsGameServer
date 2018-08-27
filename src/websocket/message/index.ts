import WS from '../base/ws';
import DataBus from '../../dataStatus/DataBus';
const dataBus = new DataBus();

export const message = async (ws: WS, data: string) => {
  const obj = JSON.parse(data) as any;
  dataBus.users[obj.userId] = obj;
  // console.log(dataBus.users);
};
