import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FontFamilyProvider from './store/FontFamilyContext';
import ThemeProvider from './store/ThemeContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <FontFamilyProvider>
        <App />
      </FontFamilyProvider>
    </ThemeProvider>
  </React.StrictMode>
);
