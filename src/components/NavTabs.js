import React from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function NavTabs({ currentPage, handlePageChange }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="navbar-brand" style={{ fontSize: "30pt" }}>
          Nicholas Ortiz
        </div>
        <Button
          className="navbar-toggler"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
          aria-controls="navbarNav"
          aria-expanded={navbarOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <Collapse in={navbarOpen} className="custom-collapse">
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  href="#about"
                  onClick={() => handlePageChange('About')}
                  className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#portfolio"
                  onClick={() => handlePageChange('Portfolio')}
                  className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  onClick={() => handlePageChange('Contact')}
                  className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                  Contact Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#resume"
                  onClick={() => handlePageChange('Resume')}
                  className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </Collapse>
      </nav>
    </div>
  );
}

export default NavTabs;
