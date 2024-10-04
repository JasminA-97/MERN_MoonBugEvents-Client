import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import './bootstrap.min.css'
import ContextAPI from './contexts/ContextAPI.jsx'
import AuthContext from './contexts/AuthContext.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <ContextAPI>
        <BrowserRouter>
          <App/>
          <ToastContainer position='top-center' theme='colored' autoClose={3000} />
        </BrowserRouter>
      </ContextAPI>
    </AuthContext>
  </React.StrictMode>,
)
