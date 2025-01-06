import { defineExtensionMessaging } from '@webext-core/messaging';

export interface ProtocolMap {
    "test-message": {
        in: {
            message: string
        },
        out: {
            success: boolean;
        }
    },
    "popup-to-background": {
        in: {
            open: boolean;
        },
        out: {
            success: boolean;
        }
    }
}

export const { sendMessage, onMessage } = defineExtensionMessaging<ProtocolMap>();
