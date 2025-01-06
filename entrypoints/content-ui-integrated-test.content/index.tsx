
import ReactDOM from 'react-dom/client';

import { onMessage } from '@/messaging/send-message';
import { testMessageFunction } from '@/messaging/on-message';
import App from './App.tsx';

export default defineContentScript({
  matches: ['<all_urls>'],

  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: 'inline',
      anchor: 'body',
      onMount: (container) => {
        // Create a root on the UI container and render a component
        const root = ReactDOM.createRoot(container);
        root.render(<App />)
        return root;
      },
      onRemove: (root) => {
        // Unmount the root when the UI is removed
        root?.unmount();
      },
    });

    onMessage("test-message", testMessageFunction)

    // Call mount to add the UI to the DOM
    ui.mount();
  },
});