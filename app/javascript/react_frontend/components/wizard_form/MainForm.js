import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

import './Wizard.scss'

class MainForm extends React.Component {

  render() {
    const {currentStep, height, outside, gender, show} = this.props.state
    const {handleChange, handleSubmit, previousButton, nextButton, handleClose, state} = this.props

    return (
      <div className={`${show ? "modal display-block" : "modal display-none"}`}>
        <div className="wizard-wrapper modal-main" >
          <div className="wizard-box">
            <form>
              <Step1
                currentStep={currentStep}
                handleChange={handleChange}
                height={height}
              />
              <Step2
                currentStep={currentStep}
                handleChange={handleChange}
                outside={outside}
              />
              <Step3
                currentStep={currentStep}
                handleChange={handleChange}
                gender={gender}
                state={state}
              />
              {previousButton}
              {nextButton}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default MainForm;

