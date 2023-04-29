import React, { useState } from "react";
import Form from './Form';
import Display from './Display';

function Parent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [fullName, setfullName] = useState("");

function handleFirstNameChange(event) {
     setFirstName(event.target.value)
};

function handleLastNameChange(event) {
     setLastName(event.target.value)
};

function handleNewsletterChange(event) {
  setNewsletter(event.target.checked);
}
function handleSubmit(event) {
  event.preventDefault();
  const fullName = firstName + " " + lastName;
  setfullName(fullName);
}
  return (
    <div>
    < Form 
      firstName={firstName}
      lastName={lastName}
      handleFirstNameChange={handleFirstNameChange}
      handleLastNameChange={handleLastNameChange}
      handleSubmit={handleSubmit}
    />
    <Display firstName={firstName} lastName= {lastName}/>
    <form>
    <label htmlFor="newletter">Subscribe to our Newsletter?</label>
    <input
    type="checkbox"
    id="newsLetter"
    onChange={handleNewsletterChange}
    checked={newsletter}
    />
    </form>
    </div>
  );
  }

export default Parent;
