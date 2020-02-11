import React from 'react';

class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null
    }
    return(
      <div className="form-group">
        <label htmlFor="size">What size of dog are you looking for?</label>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="size"
              value="big"
              defaultChecked={this.props.size === 'big'}
              onChange={this.props.handleChange} />
            Big dog
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="size"
              value="medium size"
              defaultChecked={this.props.size === 'medium size'}
              onChange={this.props.handleChange} />
            Medium size dog
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="size"
              value="small"
              defaultChecked={this.props.size === 'small'}
              onChange={this.props.handleChange} />
            Small dog
          </label>
        </div>
      </div>
    )
  }
}

export default Step1
