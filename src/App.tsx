import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import './App.css'
import Signup from './pages/Signup'
import Home from './pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* default route */}
          <Route path='/' element={<Navigate to="/login" replace />}/>
       
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
