// бутстрап и точка входа
// ипморты react
import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'

// импорты компонентов и стилей
import App from './App'
import './index.css'

// создание root
const root = document.querySelector('#root')
if (!root) throw new Error('root not found')

// отрисовка App в root
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
)
