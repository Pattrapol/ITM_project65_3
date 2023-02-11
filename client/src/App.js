import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import DatePicker from "react-datepicker";




const DateInput = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    );
  };

  const buttonText=<button>ยืนยัน</button>;

function App() {

  return (
    
      <div className='App'>
        <div className='App-Bar'>
          nav bar 
        </div>
      <header className="App-header">
        <h1> FACE MASK DECTECTION</h1>
      </header>
      <div className='Date'>
        <div>
          <input type="date" onChange={e=>DateInput(e.tar.value)}/>
          <br></br>
          {buttonText}
        </div>
      </div>
    </div>
    
    
  );
}

export default App;
