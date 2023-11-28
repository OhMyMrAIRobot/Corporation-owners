import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./i18n.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={<div>loading....</div>}>
        <App />
    </Suspense>
);

reportWebVitals();
