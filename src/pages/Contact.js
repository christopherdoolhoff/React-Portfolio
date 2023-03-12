import React, { useState } from "react";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../utils/helpers";

export default function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    }
    if (!name) {
      setErrorMessage("Please enter name");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    }
    if (!message) {
      setErrorMessage("Please enter message");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    }
    alert(
      `Hello ${name}, this messaging feature does not work yet, please send an email to contact me at christopherdoolhoff@gmail.com.`
    );

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <>
      <div>
        <h4>Contact me</h4>
        <form className="form">
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            id="message"
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="message"
          />
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p id="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
      <div id="info">
        <h4>Contact me</h4>
        <h3>Email:</h3>{" "}
        <a href="mailto:christopherdoolhoff@gmail.com">
          christopherdoolhoff@gmail.com
        </a>
      </div>
    </>
  );
}
