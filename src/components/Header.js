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
      </section>
    </>
  );
}

export default Header;
