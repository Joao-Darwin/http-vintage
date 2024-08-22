import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'

function App() {

  return (
    <BrowserRouter>
      <h1>Header</h1>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <h1>Footer</h1>
    </BrowserRouter>
  )
}

export default App
