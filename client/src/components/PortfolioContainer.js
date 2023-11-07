import React, { useState } from 'react';
import "../components/style/global.css"

import Header from './Header';
import Footer from './Footer';
import CTA from './CalltoAction';
import Home from './pages/Home';
import Services from './pages/ServicesContainer';
import About from './pages/About';
import Contact from './pages/Contact';
import ClientLogin from './pages/ClientLogin';
import Video from './vid'


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Services') {
      return <Services />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'ClientLogin') {
      return <ClientLogin />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <br></br>
      <Video></Video>
      <br></br>
      <br></br>
      {renderPage()}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <CTA currentPage={currentPage} handlePageChange={handlePageChange} />
      <br></br>
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} ></Footer>
    </div> 
  )
}
