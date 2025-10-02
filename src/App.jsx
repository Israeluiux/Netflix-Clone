import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SingleMovie from './Pages/SingleMovie';


function App() {
  return (
    <div className=''>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<SingleMovie />} />
        </Routes>
      <Footer />
        </div>
  );
}

export default App;