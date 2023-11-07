import React from "react";
import ServicesTabs from '../ServicesTabs';

function Services({ currentPage, handlePageChange }) {
  return (
    <>
      <section className="container">
          <div>
            <ServicesTabs
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
      </section>
    </>
  );
}

export default Services;
