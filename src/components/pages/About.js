import React from 'react';
import nick from '../../assets/hs3.png';

export default function About() {
  return (
    <div className='container' style={{ maxWidth: "70%", border: "solid", borderStyle: "groove", borderColor: "silver", backgroundColor: "rgb(57, 46, 46)" }}>
      <div className='row align-items-center'>
        <div className='col-sm-8'>
          <h3>Nicholas Ortiz, MS</h3>
          <p>
            Nicholas has a BA from the University of Texas at Austin, an MS Marketing degree
            specializing in entrepreneurship and consulting from the University of Houston,
            and is currently studying web development at The University of Texas at Austin.
          </p>
        </div>

        <div className='container col-sm-4 d-flex justify-content-end align-items-center' style={{border: "solid", borderStyle: "groove", borderColor: "silver", backgroundColor: "rgb(57, 46, 46)" }}>
          <img src={nick} alt='Nick' className="img-fluid justify-content-center" />
        </div>
      </div>
    </div>
  );
}
