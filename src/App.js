import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import validator from 'validator'
import Modal from "./Modal";

function App() {
  const [email, setEmail] = useState("");
  const [web, setWeb] = useState("");
  const [emailError, setEmailError] = useState("");
  const [webError, setWebError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  
  const validateEmail = (e) => {
    const email = e.target.value
    if (validator.isEmail(email)) {
      setEmailError('Valid Email Successfully:)')
      setEmail(email)
      setIsOpen(true)
    } else {
      setEmailError('Enter valid Email!')
    }
    const website=e.target.value
    if (validator.isURL(website)) {
      setWebError('Valid Website Successfully:)')
      setWeb(website)
      setIsOpen(true)
    } else {
      setWebError('Enter valid Website!')
    }
  }
  const reset=()=>{
      setEmailError("")
      setEmail("")
      setWebError("")
      setWeb("")
      setIsOpen(false)
  }
  return (
    <div className="form">
      <form className="form-horizontal">
        <div className="form-group">
          <label>Enter Email/Website:</label>
          <input type="text" className="form-control" onChange={(e)=>validateEmail(e)}/>
          <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError?emailError:webError}</span>
        </div>
      </form>
      {isOpen && <Modal setIsOpen={setIsOpen} content={email} website={web} reset={reset}/>}
    </div>
  );
}

export default App;
