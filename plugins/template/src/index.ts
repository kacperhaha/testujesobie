import {after} from "@vendetta/patcher";
import {findByName, findByStoreName} from "@vendetta/metro";
import Settings from "./Settings";

const RowManager = findByName("RowManager");
const UserStore = findByStoreName("UserStore");

let unpatch: Function;
function snowflakeToDate(snowflake) {
    const dateBits = Number(BigInt.asUintN(64, snowflake) >> 22n);
    return new Date(dateBits + 1420070400000);
}


export const onLoad = () => {
  unpatch = after("generate", RowManager.prototype, ([row], {message}) => {
    if (row.rowType !== 1) return;

    // get timestamp from message
    message.timestamp = `${snowflakeToDate(message.id).toLocaleString()}`
    if (message.referencedMessage?.message) {
        message.referencedMessage.message.timestamp = `${snowflakeToDate(message.referencedMessage.message.id).toLocaleString()}`
      }
  
    // message.timestamp = `${message.timestamp} - ${UserStore.get(message.authorId)?.username}`

    


  });
};

export const onUnload = () => {
  unpatch?.();

};

export const settings = Settings;
