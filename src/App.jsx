import { useState } from 'react';
import EnrolmentForm from './EnrolmentForm.jsx';
import './App.css';

function App() {
  const [program, setProgram] = useState('UG');
  const [seats, setSeats] = useState(100);

  const handleChange = (event) => {
    setProgram(event.target.value);
  };

  const setUpdatedSeats =(updatedSeats)=>{
    setSeats(updatedSeats);
  }

  return (
    <div className="App">
      <h1>Remaning Seats - {seats}</h1>
      <div className="programs">
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
      currentSeats={seats}
      />

    </div>
  );
}

export default App;
