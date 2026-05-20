import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const theme = localStorage.getItem("theme");

if (theme === "light") {
    document.documentElement.classList.remove("dark");
} else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
