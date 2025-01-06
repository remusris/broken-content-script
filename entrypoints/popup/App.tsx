import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import wxtLogo from '/wxt.svg';
import './App.css';
import { sendMessage } from '@/messaging/send-message';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://wxt.dev" target="_blank">
          <img src={wxtLogo} className="logo" alt="WXT logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>WXT + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <button onClick={() => sendMessage("popup-to-background", { in: { open: true }, out: { success: false } })}>
        Send message to background - then send message to content
      </button>
    </>
  );
}

export default App;
