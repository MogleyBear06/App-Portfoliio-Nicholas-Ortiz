import React from 'react';
import nick from '../../assets/hs3.png';

export default function About() {
  return (
    <div className='container' style={{ maxWidth: "95vmin", border: "solid", borderStyle: "groove", borderWidth:"3px", borderColor: "silver",}}>
      <div className='row align-items-center'>
        <div className=' container col-sm-8'>
          <h3>Nicholas Ortiz, MS</h3>
          <p>
            Nicholas has a BA from the University of Texas at Austin, an MS Marketing degree
            specializing in entrepreneurship and consulting from the University of Houston,
            as well as a full-stack web development certificate from The University of Texas at Austin.
          </p>
        </div>

        <div className='container col-sm-4 d-flex justify-content-end' style={{ maxHeight:"30vmin", maxWidth:"30vmin"}}>
          <img src={nick} alt='Nick' className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
