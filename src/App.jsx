import { useState } from 'react';
import EnrolmentForm from './EnrolmentForm.jsx';
import EnrolList from './EnrolList.jsx';
import './App.css';

function App() {
  const [program, setProgram] = useState('UG');
  const [ugSeats, setUgSeats] = useState(60);
  const [pgSeats, setPgSeats] = useState(40);

  const handleChange = (event) => {
    setProgram(event.target.value);
    setPgSeats(pgSeats);
    setUgSeats(ugSeats);
  };

  const setUpdatedSeats = (updatedSeats) => {
    if (program === 'UG') {
      setUgSeats(updatedSeats);
      return;
    }
    setPgSeats(updatedSeats);
  };

  return (
    <div className="App">
      <div className="programs">
        <h3 className="title">Student Enrolment Form</h3>
        <ul className="ulEnrol">
          <li className="parentLabels" onChange={handleChange}>
            <input type="radio" value="UG" name="programGroup" defaultChecked />{' '}
            Undergraduate
            <input
              type="radio"
              value="PG"
              className="radiosel"
              name="programGroup"
            />{' '}
            Postgraduate
          </li>
          <li>
            <label className="parentLabels">
              Remainig {program} Seats - {program === 'UG' ? ugSeats : pgSeats}
            </label>
          </li>
        </ul>
      </div>
      <EnrolmentForm
        chosenProgram={program}
        setUpdatedSeats={setUpdatedSeats}
        currentSeats={program === 'UG' ? ugSeats : pgSeats}
      />
      <EnrolList />
    </div>
  );
}

export default App;
