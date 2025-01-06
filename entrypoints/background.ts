import { onMessage } from '@/messaging/send-message';
import { popupToBackgroundFunction } from '@/messaging/on-message';

export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });

  onMessage("popup-to-background", popupToBackgroundFunction)
});
