import { after, before } from '@vendetta/patcher';
import { ReactNative } from '@vendetta/metro/common';
import { storage } from '@vendetta/plugin';
import {findByName, findByStoreName} from "@vendetta/metro";
import Settings from "./Settings";
const { DCDChatManager } = ReactNative.NativeModules;

const RowManager = findByName("RowManager");
const MessageStore = findByStoreName("MessageStore");
let unpatchUpdateRows;
let unpatch: Function;
function snowflakeToDate(snowflake) {
    const dateBits = Number(BigInt.asUintN(64, snowflake) >> 22n);
    return new Date(dateBits + 1420070400000);
}


export const onLoad = () => {
  unpatch = after("generate", RowManager.prototype, ([row], {message}) => {
    for ( const row of rows ) {
      if (row.rowType !== 1) continue;


      if (row.message.timestamp) {
          row.message.timestamp = `${snowflakeToDate(row.message.id).toLocaleString()}`
          continue;
      }

  }

  /**
   * Finally, re-stringify the row.
   */
  args[1] = JSON.stringify(rows);
});
    // message.timestamp = `${snowflakeToDate(message.id).toLocaleString()}`

  
    // message.timestamp = `${message.timestamp} - ${UserStore.get(message.authorId)?.username}`

    

unpatchUpdateRows = before("updateRows", DCDChatManager, args => {
    const rows = JSON.parse(args[1]);

    for ( const row of rows ) {
        if (row.rowType !== 1) continue;


        if (row.message.timestamp) {
            row.message.timestamp = `${snowflakeToDate(row.message.id).toLocaleString()}`
            continue;
        }

    }

    /**
     * Finally, re-stringify the row.
     */
    args[1] = JSON.stringify(rows);
});




};

export const onUnload = () => {
    unpatch?.();
    unpatchUpdateRows?.();
  };

export const settings = Settings;
