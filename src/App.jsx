import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Status from './pages/Status/Status';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/status/:code' element={<Status />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
