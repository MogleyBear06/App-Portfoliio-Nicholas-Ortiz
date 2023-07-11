import React, { useState } from 'react';
import NOrtizResume from "../../assets/NicholasOrtizResume.pdf";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Resume() {
  const [frontEndOpen, setFrontEndOpen] = useState(false);
  const [backEndOpen, setBackEndOpen] = useState(false);

  return (
    <>
      <div className="container" style={{ maxWidth: "750px" }}>
        <div className="row justify-content-center">
          <a
            href={NOrtizResume}
            className="col-3 d-flex align-items-center justify-content-center text-center"
            style={{ border: "solid", borderStyle: "groove", borderColor: "silver", height: "200px", width: "200px", fontSize: "16pt", backgroundColor: "rgb(57, 46, 46)"}}
          >
            Download Resume
          </a>
          <h4 className="col-9 d-flex align-items-center" style={{ border: "solid", borderStyle: "groove", borderColor: "silver", height: "200px", width: "500px", backgroundColor: "rgb(57, 46, 46)"}}
          >
            Want to know the full breadth of Nick's work? Download their resume!
          </h4>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="container" style={{ backgroundColor: "black", height: "100%", width: "700px",}} >
        <div style={{ backgroundColor: "black", float: "left", width: "50%",}}>
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
            <div id="frontEndCollapse" style={{ width: 300, textAlign: 'justify' }}>
              <ul className="row list-unstyled">
                <li className="col">HTML</li>
                <li className="col">CSS</li>
                <li className="col">JavaScript</li>
              </ul>
              <ul className="row list-unstyled">
                <li className="col">Jquery</li>
                <li className="col">Bootstrap</li>
                <li className="col">React</li>
              </ul>
            </div>
          </Collapse>
        </div>
        <div style={{ backgroundColor: "black", float: "right", width: "50%"}}>
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
            <div id="backEndCollapse" style={{ width: 300, textAlign: 'justify' }}>
              <ul className="row list-unstyled">
                <li className="col">Node</li>
                <li className="col">APIs</li>
                <li className="col" >Express</li>
              </ul>
              <ul className="row list-unstyled">
                <li className="col">MySQL, Sequelize</li>
                <li className="col">MongoDB, Mongoose</li>
                <li className="col">GraphQl</li>
              </ul>
            </div>
          </Collapse>
        </div>
      </div>
    </>
  );
}

export default Resume;
