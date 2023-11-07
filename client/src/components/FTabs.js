import React from "react";
import { Nav, Navbar} from "react-bootstrap";

function FTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar className="d-flex justify-content-center">
      <Nav className="mr-auto align-items-center">
        <Nav.Link  href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} style={{fontSize: "2vmin",  flex: '0 0 auto',}}>
            Home 
        </Nav.Link>
        <Nav.Link href="#Services"
          onClick={() => handlePageChange('Services')}
          className={currentPage === 'Services' ? 'nav-link active' : 'nav-link'} style={{fontSize: "2vmin",  flex: '0 0 auto'}}>
           Services
        </Nav.Link>
        <Navbar.Brand href="#home"
          onClick={() => handlePageChange('Home')}
          className= {currentPage === 'Home' ? 'nav-link active' : 'nav-link'} style={{fontSize: "3vmin",  flex: '0 0 auto',}}> 
          MBK Consulting
        </Navbar.Brand>
        <Nav.Link  href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} style={{fontSize: "2vmin",  flex: '0 0 auto'}}>
          About
        </Nav.Link>
        <Nav.Link  href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} style={{fontSize: "2vmin",  flex: '0 0 auto'}}>
          Contact
        </Nav.Link>
    </Nav>
    </Navbar>
  );
}

export default FTabs;