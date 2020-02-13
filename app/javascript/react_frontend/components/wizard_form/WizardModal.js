import React, { Component } from "react";
import ReactDOM from "react-dom";

import MainForm from './MainForm'

import Fab from '@material-ui/core/Fab';
import logo from '../../images/logo.png'

import './Wizard.scss'

class WizardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      height:  '',
      outside: '',
      gender: '',
      show: false
    };
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
    this._next()
  }

  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button
          className="btn btn-secondary"
          type="button" onClick={this._prev}>
        Previous
        </button>
      )
    }
    return null;
  }

  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <3){
      return (
        <button
          className="btn btn-primary float-right"
          type="button" onClick={this._next}>
        Next
        </button>
      )
    }
    return null;
  }

  render() {
    return (
      <div>
        <MainForm
          state          = {this.state}
          handleChange   = {this.handleChange}
          handleSubmit   = {this.handleSubmit}
          previousButton = {this.previousButton()}
          nextButton     = {this.nextButton()}
          handleClose    = {this.hideModal}
        />
        <Fab variant="extended" aria-label="add" onClick={this.showModal} className="fab-button1-landing" >
          <img src={logo} alt="Logo" className="logo-main" />
          Find your dog
        </Fab>
      </div>
    );
  }
}

export default WizardModal
