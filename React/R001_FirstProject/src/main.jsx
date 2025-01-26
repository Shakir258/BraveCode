import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './Components/Card.jsx'
import Tailwind from './Components/Tailwind.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tailwind />
  </StrictMode>,
)
