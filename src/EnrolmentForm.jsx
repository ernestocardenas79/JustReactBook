import { useState } from 'react';

import './App.css';

export default function EnrolmentForm(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ event });
    setWelcomeMessage(`Welcome ${firstName} ${lastName}`);
    props.setUpdatedSeats(props.currentSeats - 1);
  };

  return (
    <div>
      <h1>Student Details</h1>

      <form className="enrolForm" onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="fname"
          onBlur={(event) => setFirstName(event.target.value)}
        />
        <label>Last Name:</label>
        <input
          type="text"
          name="lname"
          onBlur={(event) => setLastName(event.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      <label id="studentMsg" className="message">
        {welcomeMessage}
      </label>
    </div>
  );
}
