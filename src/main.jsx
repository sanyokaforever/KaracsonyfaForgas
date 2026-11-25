import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import ForgoTest from './components/ForgoTest'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ForgoTest />
  </StrictMode>,
)
