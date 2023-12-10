import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageHeader from './components/PageHeader'
import Collections from './views/Collections'
import FilmPage from './views/FilmPage'
import Search from './views/Search'
import Profile from './views/Profile'
import AddPage from './views/AddPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/collections/*' element={<Collections />} />
        <Route path='/film/:id' element={<FilmPage />} />
        <Route path='/search' element={<Search />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/add/*' element={<AddPage />} />
        <Route path='*' element={<>ой, я забыл удалить это отсюда</>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
