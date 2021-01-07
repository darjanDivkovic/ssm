import React from "react";

import CredentialsForm from "../Components/CredentialsForm";
import ErrorMessage from "../Components/ErrorMessage";
import Next from "../Resources/next.png";
import GenderForm from "../Components/GenderForm";
import BirthdayForm from '../Components/BirthdayForm';

export default function Question(props) {
  const {
    heading,
    text,
    level,
    changeLevel,
    changeName,
    changeSurname,
    setErrorMsg,
    clearErrorMsg,
    errorMsg,
  } = props;

  const renderSwitch = (param) => {
    switch (param) {
      case 0:
        return (
          <>
            <p className="text">
              Registracija traje nekoliko minuta i može biti prekinuta u bilo
              kojem momentu. Vaše informacije neće biti korištene javno
            </p>
            <img
              src={Next}
              className="next-btn"
              alt="Be patient..."
              onClick={changeLevel}
            />
          </>
        );
        break;
      case 1:
        return (
          <CredentialsForm
            changeName={changeName}
            changeSurname={changeSurname}
            changeLevel={changeLevel}
            setErrorMsg={setErrorMsg}
          />
        );
        break;
      case 2:
        return (
          <GenderForm setErrorMsg={setErrorMsg} changeLevel={changeLevel} />
        );
        break;
      case 3:
        return (
          <BirthdayForm setErrorMsg={setErrorMsg} changeLevel={changeLevel} />
        );
        break;
      default:
        break;
    }
  };
  return (
    <div className="question-container">
      <p style={level === 2 || 3 ? { textAlign: "center" } : { textAlign: "left" }}>
        {heading}
      </p>
      {renderSwitch(level)}

      <div className="level-tracker-container">
        <p className="counter">
          {level}/<span className="max-lvl-num">10</span>
        </p>
        <p className="after-text">
          KORAKA DO ČLANSTVA I <br />
          POTENCIJALNOG ZAPOSLENJA
        </p>
      </div>
      {errorMsg.length > 0 && (
        <ErrorMessage message={errorMsg} clearErrorMsg={clearErrorMsg} />
      )}
    </div>
  );
}
