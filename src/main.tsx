import React from 'react'
import ReactDOM from 'react-dom/client'
import "jquery"
import "popper.js/dist/umd/popper"
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App title='TypeScript Demo'/> {/* pass a "title" prop to the App component  */}
  </React.StrictMode>,
)
