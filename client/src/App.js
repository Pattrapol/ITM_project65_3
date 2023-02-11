import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import {Chartimport} from "./Chartim";

const DateInput = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    );
  };
  
  const buttonText=<button>hello</button>;
function App() {

  return (
      
    <Chartimport/>
    
  );
}

export default App;
