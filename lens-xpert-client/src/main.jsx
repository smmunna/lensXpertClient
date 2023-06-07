import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'
import DarkMode from './contexts/DarkMode'
import AuthProvider from './provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <DarkMode>
        <RouterProvider router={router} />
      </DarkMode>
    </AuthProvider>
  </React.StrictMode>
)
