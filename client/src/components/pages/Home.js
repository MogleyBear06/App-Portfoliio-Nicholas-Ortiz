import React from 'react';

export default function Home() {
  return (
    <div className='container d-flex justify-content-center'>
     <div className='card' style={{ maxWidth: "95vmin", border: "solid", borderStyle: "groove", borderWidth:"3px", borderColor: "silver",}}> 
      <div className='row align-items-center'>
        <div className=' container col-sm-8'>
          <h2 className="d-flex justify-content-center">A full-service consultancy</h2>
          <p>
            MBK Consulting is a full-service consultancy specializing in start-ups and small businesses with a focus on 
            business development, web application development, and digital marketing. Over the years, we've
            helped clients strengthen their business' through actionable insight and robust implementations resulting 
            in promising opportunities. MBK Consulting is dedicated to the continued success of our clients and the 
            fortifying of their market position.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
