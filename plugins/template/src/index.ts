import { logger } from "@vendetta";
import Settings from "./Settings";
import { findByName } from "@vendetta/metro";

const ChatInput = findByName("ChatInput");

export default {
    onLoad: () => {
        logger.log(ChatInput);
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
    },
    settings: Settings,
}