import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { initI18 } from './assets/i18n/index';



await initI18();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
