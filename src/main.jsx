/* eslint-disable no-unused-vars */
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {GlobalStyle} from './styles/GlobalStyle.jsx'
import {GlobalProvider} from './context/globalContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <GlobalProvider>
    <App />
    </GlobalProvider>
    
  </StrictMode>,
)
