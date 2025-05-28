import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routerr from './router';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routerr />
  </StrictMode>,
)
