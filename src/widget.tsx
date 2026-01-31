import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './widget.css'
import { ChatWidget } from './components/ChatWidget'

const widgetId = 'kcg-chat-widget-container';

// Ensure we only mount once
if (!document.getElementById(widgetId)) {
    const container = document.createElement('div');
    container.id = widgetId;
    document.body.appendChild(container);

    const root = createRoot(container);
    root.render(
        <StrictMode>
            <ChatWidget />
        </StrictMode>
    );
}
