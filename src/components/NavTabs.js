function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="container">
  <nav className="navbar navbar-expand-lg"> 
     <div className="navbar-brand" style={{fontSize: "30pt"}} >Nicholas Ortiz</div>
     <ul className="nav nav-pills ml-auto" style={{ marginLeft: 'auto'}}>
      <li>
        <a 
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </a>
      </li>
      <li>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
    </nav>
    </div>
  );
}

export default NavTabs;