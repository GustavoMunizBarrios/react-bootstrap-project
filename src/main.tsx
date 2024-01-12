import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App title='TypeScript Demo'/> {/* pass a "title" prop to the App component  */}
  </React.StrictMode>,
)
