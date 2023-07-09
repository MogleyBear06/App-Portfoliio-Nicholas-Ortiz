import React from "react";
import NOrtizResume from "../../assets/NicholasOrtizResume.pdf";

function Resume() {
  return (
    <>
      <div className="container" style={{ maxWidth: "750px" }}>
        <div className="row justify-content-center">
          <a
            href={NOrtizResume}
            className="col-3 d-flex align-items-center justify-content-center text-center"
            style={{
              border: "solid",
              borderStyle: "groove",
              borderColor: "silver",
              height: "200px",
              width: "200px",
              fontSize: "16pt",
              backgroundColor: "rgb(57, 46, 46)",
            }}
          >
            Download Resume
          </a>
          <h4
            className="col-9 d-flex align-items-center justify-content-center"
            style={{
              border: "solid",
              borderStyle: "groove",
              borderColor: "silver",
              height: "200px",
              width: "500px",
            }}
          >
            Want to know the full breadth of Nick's work? Download their resume!
          </h4>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div
        className="container"
        style={{
          border: "solid",
          borderStyle: "groove",
          borderColor: "silver",
          backgroundColor: "rgb(57, 46, 46)",
          height: "100%",
          width: "500px",
        }}
      >
        <section className="row">
          <div className="col-6 align-items-center">
            <div
              className="container"
              style={{
                border: "solid",
                borderStyle: "groove",
                borderColor: "silver",
                backgroundColor: "rgb(57, 46, 46)",
              }}
            >
              <h4
                className="text-center"
                style={{ backgroundColor: "rgb(57, 46, 46)" }}
              >
                Font-End Proficiencies
              </h4>
            </div>
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

          <div className="col-6 align-items-center">
            <div
              className="container"
              style={{
                border: "solid",
                borderStyle: "groove",
                borderColor: "silver",
                backgroundColor: "rgb(57, 46, 46)",
              }}
            >
              <h4
                className="text-center"
                style={{ backgroundColor: "rgb(57, 46, 46)" }}
              >
                Back-End Proficiencies
              </h4>
            </div>
            <ul className=" row list-unstyled">
              <li className="col">Node</li>
              <li className="col">APIs</li>
              <li className="col">Express</li>
            </ul>
            <ul className=" row list-unstyled">
              <li className="col">MySQL, Sequelize</li>
              <li className="col">MongoDB, Mongoose</li>
              <li className="col">GraphQl</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default Resume;
