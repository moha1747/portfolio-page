import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <>
    <GlobalStyles />
    <Typography />
    <App />
  </>
);
