import React, { useState } from "react";

import maleIcon from "../Resources/man.png";
import womanIcon from "../Resources/woman.png";

import Next from '../Resources/next.png'

export default function GenderForm(props) {
  const [selectedButton, setSelectedButton] = useState(0);
  const { setErrorMsg, changeLevel } = props

  const validateSelection = () => {
    if(selectedButton === 0) setErrorMsg('Potrebno je odabrati spol za nastavak')
    else changeLevel()
  }
  
  console.log('selected button :', selectedButton)
  return (
    <div className="gender-from-container">
      <button onClick={() => setSelectedButton(1)}
        className={selectedButton === 1 ? 'gender-btn-selected' : 'gender-btn'}>
        <img src={womanIcon} />
      </button>
      <button onClick={() => setSelectedButton(2)}
        className={selectedButton === 2 ? 'gender-btn-selected' : 'gender-btn'}>
        <img src={maleIcon} />
      </button>
      <img
        src={Next}
        className="next-btn"
        alt="Be patient..."
        onClick={() => validateSelection()}
      />
    </div>
  );
}
