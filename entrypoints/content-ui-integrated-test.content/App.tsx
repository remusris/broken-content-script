import { Wand, Crop, X, Camera } from 'lucide-react';
import { testMessageFunction } from '@/messaging/on-message';
import { onMessage } from '@/messaging/send-message';

const App = () => {

    useEffect(() => {
        // Set up message listener
        const unsubscribe = onMessage('test-message', testMessageFunction);

        // Cleanup listener on component unmount
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div
            data-element-logger="root"
            style={{
                position: 'fixed',
                bottom: '10px',
                right: '20px',
                zIndex: 2147483647,
                padding: '5px',
                background: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                display: 'flex',
                flexDirection: 'row',
                gap: '5px'
            }}
        >
            <button
                data-element-logger="toggle"
                style={{
                    padding: '8px 8px',
                    border: 'none',
                    borderRadius: '4px',
                    background: '#ff4444',
                    color: 'white',
                    cursor: 'pointer',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '14px',
                    transition: 'background-color 0.2s'
                }}
            >
                <Wand height={16} width={16} />
            </button>
        </div>
    )
}

export default App;