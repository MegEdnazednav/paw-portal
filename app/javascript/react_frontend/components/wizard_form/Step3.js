import React from 'react';

class Step3 extends React.Component {
  render() {
    if (this.props.currentStep !== 3) {
      return null
    }
    return(
      <div className="form-group">
        <label htmlFor="gender">Male or female?</label>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              defaultChecked={this.props.gender === 'male'}
              onChange={this.props.handleChange} />
            Male
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              defaultChecked={this.props.gender === 'female'}
              onChange={this.props.handleChange} />
            Female
          </label>
        </div>
        <button className="btn btn-success btn-block">GET DOGS</button>
      </div>
    )
  }
}

export default Step3
