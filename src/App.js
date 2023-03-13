import React from 'react';
import Home from './pages/Home';
import Video from './pages/video';

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/navBar/Navbar';
import Footer from './components/ui/footer'; 


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/videos/:videoId" element={<Video />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );

}

export default App;
