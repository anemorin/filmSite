import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Authorization from './views/Authorization'
import Router from './Router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/authorization/*' element={<Authorization />}/>
      <Route path='/*' element={<Router />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)