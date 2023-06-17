import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CrowdFundingProvider } from '../Context/CrowdFunding.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CrowdFundingProvider>
      <App /> 
    </CrowdFundingProvider>
  </React.StrictMode>,
)
