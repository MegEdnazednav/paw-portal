import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

import './Wizard.scss'

class MainForm extends React.Component {
  showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

  render() {
    return (
        <div className={this.showHideClassname}>
          <div className="wizard-wrapper modal-main" >
            <div className="wizard-box">
              <form onSubmit={this.props.handleSubmit}>
                <Step1
                  currentStep={this.props.currentStep}
                  handleChange={this.props.handleChange}
                  height={this.props.height}
                />
                <Step2
                  currentStep={this.props.currentStep}
                  handleChange={this.props.handleChange}
                  outside={this.props.outside}
                />
                <Step3
                  currentStep={this.props.currentStep}
                  handleChange={this.props.handleChange}
                  gender={this.props.gender}
                />
                {this.props.previousButton}
                {this.props.nextButton}
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default MainForm;

