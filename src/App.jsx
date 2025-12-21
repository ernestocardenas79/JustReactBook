import { useState } from 'react';
import EnrolmentForm from './EnrolmentForm.jsx';
import './App.css';

function App() {
  const [program, setProgram] = useState('UG');
  const [ugSeats, setUgSeats] = useState(60);
  const [pgSeats, setPgSeats] = useState(40)

  const handleChange = (event) => {
    setProgram(event.target.value);
  };

  const setUpdatedSeats = (updatedSeats) => {
    if (program === 'UG') {
      setUgSeats(updatedSeats)
      return
    }
    setPgSeats(updatedSeats);
  }

  return (
    <div className="App">
      <div className="programs">
        <h2>Remaning UG Seats - {ugSeats}</h2>
        <br />
        <br />
        <h2>Remaning PG Seats - {pgSeats}</h2>
        <br /><br />
        <label htmlFor="">Choose Program:</label>
        <select
          className="appDropDowns"
          onChange={handleChange}
          value={program}
        >
          <option value="UG">Undergraduate</option>
          <option value="PG">Postgraduate</option>
        </select>
      </div>
      <EnrolmentForm chosenProgram={program}
        setUpdatedSeats={setUpdatedSeats}
        currentSeats={program === "UG" ? ugSeats : pgSeats}
      />

    </div>
  );
}

export default App;
