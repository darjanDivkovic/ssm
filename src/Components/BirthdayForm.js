import React, { useState } from "react";

import baby from "../Resources/baby.png";
import arrowSmall from "../Resources/arrow-small.png";

export default function BirthdayForm() {
  const [ day, setDay ] = useState(1)
  const [ month, setMonth ] = useState(1)
  const [ year, setYear ] = useState(2000)
  return (
    <div className="birthday-form-container">
      <img src={baby} className="baby-img"  style={{paddingRight: '30px'}}/>
      <div className="date-picker">
        <img src={arrowSmall} className="arrow-small-upper" onClick={()=> changeDate('inc')}/>
        <p>{day}</p>
        <img src={arrowSmall} className="arrow-small-lower" style={{transform: 'rotate(180deg)'}} onClick={()=> changeDate('dec')}/>
      </div>
      <div className="date-picker">
        <img src={arrowSmall} className="arrow-small-upper" />
        <p>{month}</p>
        <img src={arrowSmall} className="arrow-small-lower" style={{transform: 'rotate(180deg)'}}/>
      </div>
      <div className="date-picker">
        <img src={arrowSmall} className="arrow-small-upper" />
        <p>{year}</p>
        <img src={arrowSmall} className="arrow-small-lower" style={{transform: 'rotate(180deg)'}}/>
      </div>
    </div>
  );
}

const changeDate = (value) => {
    if(value === 'inc'){
        console.log('Increasing')
    }
    else if(value === 'dec'){
        console.log('Decreasing')
    }
}
