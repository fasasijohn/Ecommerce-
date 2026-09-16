import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './config/deployment.js';
import App from './App.jsx';
import {BrowserRouter} from "react-router";

createRoot(document.getElementById('root')).render(
    <StrictMode>

        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <App />
        </BrowserRouter>

    </StrictMode>
);
