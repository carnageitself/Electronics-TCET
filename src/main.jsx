import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextWrapper from './context/ContextWrapper.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextWrapper>
    <App />
    </ContextWrapper>
)
