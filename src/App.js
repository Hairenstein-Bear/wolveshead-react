import logo from './logo.svg';
import './App.css';
import "./font/HammersmithOne-Regular.ttf";
import Header from './Header';
import Hero from './hero';
import About from './About';
import InfoBox from './infoBox';
import Review from './Review';
import Location from './Location';
import Specials from './Specials';
import Gallery from './Gallery';
import Footer from './Footer';
import React from 'react';
import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Header />} />
          {/* <Route path="/location" element={<Location/>} /> */}
          {/* <Route path="#specials" element={<App />} /> */}
        </Route>
      </Routes>
    <div>
      <Hero />
      <InfoBox />
      <About/>
      <Location />
      <Specials />
      <Gallery />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
