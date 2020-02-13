import React from 'react';
import bigDog from '../../images/big_dog.png'
import mediumDog from '../../images/medium_dog.png'
import smallDog from '../../images/small_dog.png'

import './Wizard.scss'

class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null
    }
    return(
      <div className="form-group">
        <label htmlFor="height">What size of dog are you looking for?</label>
        <div className="flexbox">
          <div className="radio">
            <label>
              <input
                className="radio-tick"
                type="radio"
                name="height"
                value="big"
                defaultChecked={this.props.height === 'big'}
                onChange={this.props.handleChange} />
              <img src={bigDog} alt="Big dog" />
              <span>Big dog</span>
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                className="radio-tick"
                type="radio"
                name="height"
                value="medium"
                defaultChecked={this.props.height === 'medium'}
                onChange={this.props.handleChange} />
              <img src={mediumDog} alt="Medium dog" />
              <span>Medium size dog</span>
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                className="radio-tick"
                type="radio"
                name="height"
                value="small"
                defaultChecked={this.props.height === 'small'}
                onChange={this.props.handleChange} />
              <img src={smallDog} alt="Small dog" />
              <span>Small dog</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default Step1
