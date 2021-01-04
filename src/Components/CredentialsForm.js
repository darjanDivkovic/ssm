import React, { useState } from "react";
import Next from "../Resources/next.png";

export default function CredentialsForm(props) {
  const { setName, setSurname, changeLevel, setErrorMsg } = props;
  const [newName, setNewName] = useState("");
  const [newSurname, setNewSurname] = useState("");

  const validateInput = () => {
      if(newName.length === 0 || newSurname.length === 0) {
          setErrorMsg('Oba polja trebaju biti popunjena')
      }
      else if(newName.length <= 2){
          setErrorMsg('Ime je prekratko')
      }
      else if(newSurname.length <= 2){
        setErrorMsg('Prezime je prekratko')
    } else changeLevel()
    
    let isNameValid = true
    for(let i = 0 ; i < newName.length ; i++){
        if(!(isLetter(newName[i]))) return false
    }

  };

  const isLetter = (c) => {
    return c.toLowerCase() != c.toUpperCase()
  }

  console.log(`${newSurname, newSurname}`)

  return (
    <div className="credentials-form-container">
      <div className="credentials-inner">
        <input
          className="input"
          onChange={(e) => setNewName(e.target.value)}
          value={newName}
          spellcheck="false"
        />
        <p>IME</p>
      </div>
      <div className="credentials-inner">
        <input className="input" 
        onChange={(e) => setNewSurname(e.target.value)}
        value={newSurname}
        spellcheck="false"
        />
        <p>PREZIME</p>
      </div>
      <img
        src={Next}
        className="next-btn"
        alt="Be patient..."
        onClick={validateInput}
      />
    </div>
  );
}
