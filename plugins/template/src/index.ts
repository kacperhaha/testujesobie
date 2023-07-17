import {after} from "@vendetta/patcher";
import {findByName, findByStoreName} from "@vendetta/metro";
import Settings from "./Settings";

const RowManager = findByName("RowManager");
const UserStore = findByStoreName("UserStore");

let unpatch: Function;

export const onLoad = () => {
  unpatch = after("generate", RowManager.prototype, ([row], {message}) => {
    if (row.rowType !== 1) return;
    // get timestamp from message
    message.timestamp = `edited ${message.timestamp}`
    if (message.referencedMessage?.message) {
        message.referencedMessage.message.timestamp = `edited ${message.referencedMessage.message.timestamp}`
      }
  
    // message.timestamp = `${message.timestamp} - ${UserStore.get(message.authorId)?.username}`

    


  });
};

export const onUnload = () => {
  unpatch?.();

};

export const settings = Settings;
