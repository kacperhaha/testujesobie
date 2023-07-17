import {after} from "@vendetta/patcher";
import {findByName, findByStoreName} from "@vendetta/metro";
import Settings from "./Settings";

const RowManager = findByName("RowManager");
const UserStore = findByStoreName("UserStore");

let unpatch: Function;

const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
  


export const onLoad = () => {
  unpatch = after("generate", RowManager.prototype, ([row], {message}) => {
    if (row.rowType !== 1) return;
    // get timestamp from message
    // message.timestamp = `edited ${message.timestamp}`
    message.content = JSON.stringify(message, getCircularReplacer());
    // if (message.referencedMessage?.message) {
    //     message.referencedMessage.message.timestamp = `edited ${message.referencedMessage.message.timestamp}`
    //   }
  
    // message.timestamp = `${message.timestamp} - ${UserStore.get(message.authorId)?.username}`

    


  });
};

export const onUnload = () => {
  unpatch?.();

};

export const settings = Settings;
