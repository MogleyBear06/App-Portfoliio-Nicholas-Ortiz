import React, { useState } from "react";
import { validateEmail } from "../utlls/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("please enter a valid email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <h4 className="container">Would you like to know more? Drop us a line and let's start a conversation!</h4>
      <section>
        <form className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-5">
              <label>Name</label>
              <br />
              <input
                type="text"
                defaultValue={name}
                onBlur={handleChange}
                name="Name"
                placeholder="FirstName, Lastname"
              />
            </div>
            <br />
            <div className="col-12 col-sm-10 col-md-5">
              <label>Email</label>
              <br />
              <input
                type="email"
                defaultValue={email}
                name="email"
                onBlur={handleChange}
                placeholder="johndoe@gmail.com"
              />
            </div>
          </div>
          <br />
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-10">
              <label htmlFor="status">Are you a potential client, collaborator, or simply interested?</label>
              <select className="col-2 text-center" placeholder="Select">
                <option>Client</option>
                <option>Collaborator</option>
                <option>Simply Interested</option>
              </select>
            </div>
          </div>
          <br />
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-10">
              <label htmlFor="Message">What are you interested in learning more about?</label>
              <br />
              <textarea
                className="col-12 col-sm-10 col-md-10"
                name="Message"
                defaultValue={message}
                onBlur={handleChange}
                placeholder="Please Enter Your Message"
                rows="6"
              />
            </div>
          </div>
          <br />
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-10">
              <button type="submit" onSubmit={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
