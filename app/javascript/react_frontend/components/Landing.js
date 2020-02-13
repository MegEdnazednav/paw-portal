import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import fetchAnimals from '../redux/actions/fetchAnimalsActions'

import WizardModal from './wizard_form/WizardModal'

import Fab from '@material-ui/core/Fab';
import logo from '../images/logo.png'

import Typed from 'react-typed';

const mapDispatchToProps = dispatch => (
  bindActionCreators({fetchAnimals}, dispatch)
)

class Landing extends React.Component {

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
    this._next()
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchAnimals(this.state);
  }

  render() {
    return (
      <div className="landing-background">
        <WizardModal />
        <Fab variant="extended" aria-label="add" component={Link} to={'/animals'} className="fab-button-landing" >
          <img src={logo} alt="Logo" className="logo-main" />
          Just sniff around
        </Fab>

        <div className="typed-text">
        <h1>CHANGE YOUR LIFE</h1>
          <h1>
            <Typed
              strings={['ADOPT A DOG', 'VOLUNTEER', 'GET ACTIVE']}
              typeSpeed={60}
              loop
            />
          </h1>
        </div>
      </div>
    )
  }
}

export default connect(mapDispatchToProps)(Landing);

