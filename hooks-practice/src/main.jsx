import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AppProvider } from './components/usecontext/useContext.jsx'
import { MyProvider } from './components/usecontext/myContext.jsx'
import { StudentProvider } from './components/usecontext/studentContext.jsx'
import { AdminProvider } from './components/usecontext/adminContext.jsx'
import { RizwanProvider } from './components/usecontext/rizwanContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RizwanProvider>
    <AdminProvider>
      <StudentProvider>
        <MyProvider>
          <AppProvider>
            <App />
          </AppProvider>,
        </MyProvider>
      </StudentProvider>
    </AdminProvider>
  </RizwanProvider>


)
