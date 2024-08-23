import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <h1>Footer</h1>
    </BrowserRouter>
  )
}

export default App
