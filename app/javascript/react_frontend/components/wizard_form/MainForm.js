import React from 'react';

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

class MainForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      size:  '',
      outside: '',
      gender: ''
    }
  };

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
    this._next()
  }

  handleSubmit = event => {
    event.preventDefault()
    const { size, outside, gender } = this.state
    alert(`This is what you are looking for: \n
           Size: You are looking for a ${size} dog \n
           Outside space: You have ${outside} \n
           Gender: You want a ${gender} dog`)
  }

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
      <React.Fragment>
      <hr />
      <p>Step {this.state.currentStep} </p>

      <form onSubmit={this.handleSubmit}>
        <Step1
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          size={this.state.size}
        />
        <Step2
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          outside={this.state.outside}
        />
        <Step3
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          gender={this.state.gender}
        />
        {this.previousButton()}
        {this.nextButton()}
      </form>
      </React.Fragment>
    );
  }
}

export default MainForm
