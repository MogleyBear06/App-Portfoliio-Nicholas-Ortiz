import React from "react";
import Links from "./Links";
import FTabs from "./FTabs";

function Footer({ currentPage, handlePageChange }) {
  return (
    <footer className="footer text-center" style={{ width: "100%", margin: 0, padding: 0 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <FTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        <div className="border-top" style={{ width: "100%" }}>
          <div style={{ padding: "20px 0" }}>
            <Links currentPage={currentPage} handlePageChange={handlePageChange} />
          </div>
        </div>
        <ul className="align-items-center list-unstyled">
          <li className="col">
            Austin, TX
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
