import React from "react";
import { AiFillGithub } from "react-icons/ai";

import BarkBook from "../../assets/bb.png";
import NiftyNote from "../../assets/niftynote.png";
import Weatherapi from "../../assets/weather.png";
import BusyBee from "../../assets/Busybee.png";
import PasswordGen from "../../assets/Passwordgenerator.png";
import SecondTeam from "../../assets/2ndTeamProductions.png";

function Projects() {
  return (
    <>
      <div className="container">
        <h4>Portfolio</h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <a href="https://barkbookapp.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src={BarkBook} alt="Barkbook" className="rounded" style={{ height: '200px', width: '300px',  }} />
            </a>
            <a href='https://github.com/MogleyBear06/BarkBook.git' target="_blank" rel="noopener noreferrer">
              <AiFillGithub style={{ color: 'white', fontSize: '40px' }} />
            </a>
          </div>

          <div className="col-4">
            <a href="https://nifteynotebynick.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src={NiftyNote} alt='NiftyNote' className="rounded" style={{ height: '200px', width: '300px' }} />
            </a>
            <a href="https://github.com/MogleyBear06/Nifty-Note.git" target="_blank" rel="noopener noreferrer">
              <AiFillGithub style={{ color: 'white', fontSize: '40px' }} />
            </a>
          </div>

          <div className="col-4">
            <a href="https://mogleybear06.github.io/Whats-The-Weather/" target="_blank" rel="noopener noreferrer">
              <img src={Weatherapi} alt="weather api" className="rounded" style={{ height: '200px', width: '300px' }} />
            </a>
            <a href='https://github.com/MogleyBear06/Whats-The-Weather.git' target="_blank" rel="noopener noreferrer">
              <AiFillGithub style={{ color: 'white', fontSize: '40px' }} />
            </a>
          </div>
        </div>
        <br></br>

        <div className="row">
          <div className="col-4">
            <a href="https://mogleybear06.github.io/Busy-Bee-Daily-Planner/" target="_blank" rel="noopener noreferrer">
              <img src={BusyBee} alt='busybee' className="rounded" style={{ height: '200px', width: '300px' }} />
            </a>
            <a href='https://github.com/MogleyBear06/Busy-Bee-Daily-Planner.git' target="_blank" rel="noopener noreferrer">
              <AiFillGithub style={{ color: 'white', fontSize: '40px' }} />
            </a>
          </div>

          <div className="col-4">
            <a href="https://mogleybear06.github.io/Password-Generator-by-Nicholas-Ortiz/" target="_blank" rel="noopener noreferrer">
              <img src={PasswordGen} alt='password generator app' className="rounded" style={{ height: '200px', width: '300px' }} />
            </a>
            <a href=' https://github.com/MogleyBear06/Password-Generator-by-Nicholas-Ortiz.git' target="_blank" rel="noopener noreferrer">
              <AiFillGithub style={{ color: 'white', fontSize: '40px' }} />
            </a>
          </div>

          <div className="col-4">
            <a href="https://mogleybear06.github.io/Nicholas_Ortiz-Portfolio-Second-Team-Productions/" target="_blank" rel="noopener noreferrer">
              <img src={SecondTeam} alt='first portfolio' className="rounded" style={{ height: '200px', width: '300px' }} />
            </a>
            <a href='https://github.com/MogleyBear06/Nicholas_Ortiz-Portfolio-Second-Team-Productions.git' target="_blank" rel="noopener noreferrer">
              <AiFillGithub style={{ color: 'white', fontSize: '40px' }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
