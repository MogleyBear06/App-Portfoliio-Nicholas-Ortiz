import React from "react";
import NavTabs from "./NavTabs";

function Header({ currentPage, handlePageChange }) {
  return (
    <>
      <section className="container">
        <header className="row align-items-center">
          <div>
            <NavTabs
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        </header>
        {/* <div className="container">
        <img src={secondteam} style={{ width: '900px', height: '392px' }}></img>
        </div> */}
      </section>
    </>
  );
}

export default Header;
