import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <div className="h-screen w-screen bg-cover" style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/001/873/040/large_2x/abstract-modern-shape-black-gradient-geometric-stripes-diagonal-background-with-grunge-texture-free-vector.jpg")' }}> */}
    <App />
    {/* </div> */}
  </React.StrictMode>,
)
