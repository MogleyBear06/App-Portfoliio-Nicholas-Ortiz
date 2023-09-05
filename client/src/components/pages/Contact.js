import React, { useState } from "react";
// import { validateEmail } from "../utlls/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    personTitle:"",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { fullName, email, personTitle, message,} = formState;
  // const [submitErrorMessage, setSubmitErrorMessage] = useState("");

  function handleChange(e) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    console.log('Form state before fetch:', formState);

    // setSubmitErrorMessage("");

    // // Validation logic
    // let errors = [];
    // if (!fullName) {
    //   errors.push("Name is required.");
    // }
    // if (!email) {
    //   errors.push("Email is required.");
    // } else if (!validateEmail(email)) {
    //   errors.push("Please enter a valid email.");
    // }

    // if (errors.length > 0) {
    //   setSubmitErrorMessage(errors.join(" "));
    //   return;
    // }

    try {
      const response = await fetch("https://mbkconsulting.onrender.com/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: 'application/json, text/plain, */*',
        },
        body: JSON.stringify(formState),
      });
      
      if (response.ok) {
        console.log("Form submitted successfully");
        // Reset the form
        setFormState({
          fullName: "",
          email: "",
          personTitle: "",
          message: "",
        });
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <h4 className="container" style={{ maxWidth: "100vmin" }}>
        Would you like to know more? Drop us a line and let's start a
        conversation!
      </h4>
      <br />
      <section className="container" style={{ maxWidth: "112vmin" }}>
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-5">
              <label>Name</label>
              <br />
              <input
                type="text"
                value={fullName}
                onChange={handleChange}
                name="fullName"
                placeholder="FirstName, Lastname"
              />
            </div>
            <div className="col-12 col-sm-10 col-md-5">
              <label>Email</label>
              <br />
              <input
                type="email"
                value={email}
                onChange={handleChange}
                name="email"
                placeholder="johndoe@gmail.com"
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-10">
              <label htmlFor="status">
                Are you a potential client, collaborator, or simply
                interested?
              </label>
              <select
                className="col-2 text-center"
                placeholder="Select"
                value={personTitle}
                onChange={handleChange}
                name="personTitle"
              >
                <option value="Client">Client</option>
                <option value="Collaborator">Collaborator</option>
                <option value="Simply Interested">Simply Interested</option>
              </select>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-10">
              <label htmlFor="message">
                What are you interested in learning more about?
              </label>
              <br />
              <textarea
                className="col-12 col-sm-10 col-md-10"
                value={message}
                onChange={handleChange}
                name="message"
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
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
