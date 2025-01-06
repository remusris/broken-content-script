import { ProtocolMap, sendMessage } from "./send-message";
import { Message } from "@webext-core/messaging";
import { ExtensionMessage } from "@webext-core/messaging";

export const testMessageFunction = (
    message: Message<ProtocolMap, "test-message"> & ExtensionMessage
) => {
    console.log("test-message received", message);
}

export const popupToBackgroundFunction = (
    message: Message<ProtocolMap, "popup-to-background"> & ExtensionMessage
) => {
    console.log("popup-to-background received", message);
    sendMessage("test-message", { in: { message: "Hello from popup" }, out: { success: true } })
}

