import React, { useState } from 'react';
import NOrtizResume from "../../assets/NicholasOrtizResume.pdf";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Resume() {
  const [frontEndOpen, setFrontEndOpen] = useState(false);
  const [backEndOpen, setBackEndOpen] = useState(false);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <a
            href={NOrtizResume}
            className="col-12 col-sm-6 col-md-3 d-flex align-items-center justify-content-center text-center"
            style={{ border: "solid", borderStyle: "groove", borderColor: "silver", height: "200px", fontSize: "16pt", backgroundColor: "rgb(57, 46, 46)" }}
          >
            Download Resume
          </a>
          <div className="col-12 col-sm-6 col-md-9 d-flex align-items-center" style={{ border: "solid", borderStyle: "groove", borderColor: "silver", height: "200px", backgroundColor: "rgb(57, 46, 46)" }}>
            <h4>
              Want to know the full breadth of Nick's work? Download their resume!
            </h4>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="container" style={{ backgroundColor: "black" }}>
        <div className="row">
          <div className="col-12 col-md-6">
            <h4>
              <Button
                variant="link"
                onClick={() => setFrontEndOpen(!frontEndOpen)}
                aria-expanded={frontEndOpen}
                aria-controls="frontEndCollapse"
              >
                Front-End Proficiencies
              </Button>
            </h4>
            <Collapse in={frontEndOpen}>
              <div id="frontEndCollapse" style={{ textAlign: 'justify' }}>
                <ul className="list-unstyled">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Jquery</li>
                  <li>Bootstrap</li>
                  <li>React</li>
                </ul>
              </div>
            </Collapse>
          </div>
          <div className="col-12 col-md-6">
            <h4>
              <Button
                variant="link"
                onClick={() => setBackEndOpen(!backEndOpen)}
                aria-expanded={backEndOpen}
                aria-controls="backEndCollapse"
              >
                Back-End Proficiencies
              </Button>
            </h4>
            <Collapse in={backEndOpen}>
              <div id="backEndCollapse" style={{ textAlign: 'justify' }}>
                <ul className="list-unstyled">
                  <li>Node</li>
                  <li>APIs</li>
                  <li>Express</li>
                  <li>MySQL, Sequelize</li>
                  <li>MongoDB, Mongoose</li>
                  <li>GraphQl</li>
                </ul>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
