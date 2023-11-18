import React from 'react'

import {
  ClerkProvider
} from "@clerk/clerk-react";

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ContextProvider } from './Contexts/ContextProvider.jsx'

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_FRONTEND_API_KEY;



if (!import.meta.env.VITE_REACT_APP_CLERK_FRONTEND_API_KEY) {
  throw "Missing Publishable Key"
}

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ClerkProvider>
  </React.StrictMode>,
)
