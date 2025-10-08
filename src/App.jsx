import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SingleMovie from './Pages/SingleMovie';
import Search from './Pages/Search';
import MyList from './Pages/MyList';


function App() {
  return (
    <div className=''>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
          <Route path="/search" element={<Search />} />
          <Route path="/mylist" element={<MyList />} />
        </Routes>
      <Footer />
        </div>
  );
}

export default App;