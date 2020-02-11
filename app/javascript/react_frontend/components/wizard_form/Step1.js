import React from 'react';

class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null
    }
    return(
      <div className="form-group">
        <label htmlFor="height">What size of dog are you looking for?</label>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="height"
              value="big"
              defaultChecked={this.props.height === 'big'}
              onChange={this.props.handleChange} />
            Big dog
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="height"
              value="medium"
              defaultChecked={this.props.height === 'medium'}
              onChange={this.props.handleChange} />
            Medium size dog
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="height"
              value="small"
              defaultChecked={this.props.height === 'small'}
              onChange={this.props.handleChange} />
            Small dog
          </label>
        </div>
      </div>
    )
  }
}

export default Step1
