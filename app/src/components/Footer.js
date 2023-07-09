import React from "react";
import Links from "./Links";

function Footer({ currentPage, handlePageChange }) {
  return (
    <div className="container">
    <footer className="footer py-3 text-center border-top" >
        
        <Links currentPage={currentPage} handlePageChange={handlePageChange} />
        <br style={{ backgroundColor: "black" }} />

        <ul className="align-items-center list-unstyled">
              <li className="col">
                Austin, TX
              </li>
              <li className="col">
                (281) 734-8709
              </li>
              <li className="col">
                nicholas.james.ortiz@mbkconsulting.biz
              </li>
            </ul>
        
    </footer>
    </div>
  );
}

export default Footer;
