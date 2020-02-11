import React from 'react';

class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null
    }
    return(
      <div className="form-group">
        <label htmlFor="outside">Describe your outside space</label>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="outside"
              value="garden"
              defaultChecked={this.props.outside === 'garden'}
              onChange={this.props.handleChange} />
            I have a garden
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="outside"
              value="terrace"
              defaultChecked={this.props.outside === 'terrace'}
              onChange={this.props.handleChange} />
            I have a terrace
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="outside"
              value="none"
              defaultChecked={this.props.outside === 'none'}
              onChange={this.props.handleChange} />
            I don't have any outside space
          </label>
        </div>
      </div>
    )
  }
}

export default Step2
