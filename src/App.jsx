import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Styles
import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Contact from './pages/Contact/Contact';

// Pages
import Home from './pages/Home/Home';
import PageProduct from './pages/PageProduct/PageProduct';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products/:id" element={<PageProduct/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
