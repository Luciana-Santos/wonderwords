import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DictionaryProvider from './store/DictionaryContext';
import FontFamilyProvider from './store/FontFamilyContext';
import ThemeProvider from './store/ThemeContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <FontFamilyProvider>
        <DictionaryProvider>
          <App />
        </DictionaryProvider>
      </FontFamilyProvider>
    </ThemeProvider>
  </React.StrictMode>
);
