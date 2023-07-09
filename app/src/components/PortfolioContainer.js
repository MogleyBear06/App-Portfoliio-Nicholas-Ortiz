import React, { useState } from 'react';
import "../components/style/global.css"

import Header from './Header';
import Footer from './Footer';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Projects';
import Contact from './pages/Contact';
// import Video from '../components/vid'
import ParticleCanvas from './Particlecanvas';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');
  

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;

    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* <ParticleCanvas></ParticleCanvas> */}
      
      {/* <Video></Video> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {renderPage()}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer></Footer>
    </div> 
  )
}
