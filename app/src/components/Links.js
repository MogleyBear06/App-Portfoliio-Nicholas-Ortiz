import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoImdb } from "react-icons/bi";

function Links() {
  return (
    
    <div className="container">
      <div className="row justify-content-center">
      <div className="col-1 d-flex justify-content-center">
          <a href="https://www.linkedin.com/in/nicholasjortiz/">
            <AiFillLinkedin  style={{ color: 'Blue', fontSize: '40px' }} />
          </a>
        </div>
        <div className="col-1 d-flex justify-content-center" >
          <a href="https://github.com/MogleyBear06">
            <AiFillGithub  style={{ color: 'white', fontSize: '40px' }}/>
          </a>
        </div>
        <div className="col-1 d-flex justify-content-center">
          <a href="https://www.imdb.com/name/nm13929885/">
            <BiLogoImdb style={{ color: 'gold', fontSize: '40px' }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Links;
