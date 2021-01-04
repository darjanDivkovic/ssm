import React, { Component } from "react";
import "../Styles/formContainer.css";
import logo from "../Resources/logo-white-small.png";
import LevelTray from "../Components/LevelTray";
import Question from "../Components/Question";
import vawes from '../Resources/vawes.png'
import HEADERS from './Constants'

export default class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        level: 0,
        name: '',
        surname: '',
        errorMsg: '',
    };
  }

  changeName = (newName) => {
      this.setState({name:newName})
  }

  clearErrorMsg = () => {
      this.setState({errorMsg: ''})
  }

  changeSurname = (newSurname) => {
    this.setState({surname:newSurname})
}

  changeLevel = () => {
      let { level } = this.state
      let newLevel = ++level
      if(level <= 10) this.setState({level: newLevel})
  }
  
  setErrorMsg = (newMessage) => {
      this.setState({errorMsg:newMessage})
  }

  render() {
      const { setFormOpen } = this.props
      const { level, errorMsg } = this.state

      console.log(`name: ${this.state.name} surname: ${this.state.surname} error: ${this.state.errorMsg}`)
    return (
      <div className='form-wrapper'>
        <div className="form-container">
          <button className="close-form"
                  onClick={() => setFormOpen(false)}>X</button>
          <div className="logo-form">
            <img src={logo} className="logo-small" alt="Be patient..." />
            <p className="logo-text">SOLUCIJA MLADIH I MUDRIH</p>
          </div>
          <Question
            heading={HEADERS[level]}
            level={level}
            changeLevel={this.changeLevel}
            changeName={this.changeName}
            changeSurname={this.changeSurname}
            setErrorMsg={this.setErrorMsg}
            clearErrorMsg={this.clearErrorMsg}
            errorMsg={errorMsg}
          />
          <LevelTray level={level} />
          <img src={vawes} className='vawes-form' alt='Be patient...'/>
        </div>
      </div>
    );
  }
}
