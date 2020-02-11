import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import fetchAnimals from '../redux/actions/fetchAnimalsActions'

import AnimalList from './AnimalList'
import MainForm from './wizard_form/MainForm'

const mapStateToProps = state => {
  return { animals: state.animals.animals };
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({fetchAnimals}, dispatch)
)

class App extends React.Component {

  constructor(props) {
    super(props);
    this.initialState = {
      animals: '',
      currentStep: 1,
      height:  '',
      outside: '',
      gender: '',
      afterSelection: false
    };
    this.state = this.initialState;
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
    this.setState({afterSelection: true})
    this.props.fetchAnimals(this.state);
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

  _back = () => {
    this.setState(this.initialState);
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

  backButton(){
    return (
      <button
        className="btn btn-primary float-right"
        type="button" onClick={this._back}>
        Back to Search
      </button>
    )
  }

  render() {
    return (
      <div>
        {this.state.afterSelection &&
          <AnimalList
            animals={this.props.animals}
            backButton={this.backButton()}
           />
        }
        {!this.state.afterSelection &&
          <MainForm
            currentStep={this.state.currentStep}
            height= {this.state.height}
            outside= {this.state.outside}
            gender= {this.state.gender}
            handleChange= {this.handleChange}
            handleSubmit= {this.handleSubmit}
            previousButton={this.previousButton()}
            nextButton={this.nextButton()}
          />
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

