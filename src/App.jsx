import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import AboutUs from './Pages/AboutUs';
import HeroSec from './Components/HeroSec';
import Success from './Components/Success';

const App = () => {
  return (

    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </section>

  )
}

export default App