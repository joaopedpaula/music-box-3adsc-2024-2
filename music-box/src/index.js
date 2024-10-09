import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Home from './pages/Home/Home';
import Musicas from './pages/Musicas/Musicas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);