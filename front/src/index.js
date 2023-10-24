import React from 'react';
import ReactClient from 'react-dom/client';
import App from './App';

const root = document.querySelector('#root')

ReactClient.createRoot(root).render(
    <App />
)

