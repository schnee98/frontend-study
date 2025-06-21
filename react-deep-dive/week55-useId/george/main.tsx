import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from '@/App.tsx';

import { idState } from '@/constants/index.ts';

const options = { identifierPrefix: "my-app" };

const root = createRoot(document.getElementById('root')!, options);

idState.identifierPrefix = options.identifierPrefix;

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
