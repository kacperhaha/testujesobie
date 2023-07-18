import { after} from '@vendetta/patcher';
import { storage } from '@vendetta/plugin';
import {findByName, findByStoreName} from "@vendetta/metro";
import Settings from "./Settings";
const RowManager = findByName("RowManager");
let unpatch: Function;
function snowflakeToDate(snowflake) {
    const dateBits = Number(BigInt.asUintN(64, snowflake) >> 22n);
    return new Date(dateBits + 1420070400000);
}
// const getCircularReplacer = () => {
//   const seen = new WeakSet();
//   return (key, value) => {
//     if (typeof value === "object" && value !== null) {
//       if (seen.has(value)) {
//         return;
//       }
//       seen.add(value);
//     }
//     return value;
//   };
// };

// message.content = JSON.stringify(message, getCircularReplacer());



export const onLoad = () => {
  unpatch = after("generate", RowManager.prototype, ([row], {message}) => {
    if (row.rowType !== 1) return;
    // get timestamp from message
    if (!message.timestamp) return;
    message.timestamp = `${snowflakeToDate(message.id).toLocaleString()}`
    // if (message.referencedMessage?.message) {
    //     message.referencedMessage.message.timestamp = `${snowflakeToDate(message.referencedMessage.message.id).toLocaleString()}`
    //   }
  

    


  });
};

export const onUnload = () => {
    unpatch?.();
  };

export const settings = Settings;
