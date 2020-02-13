import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import fetchAnimals from '../redux/actions/fetchAnimalsActions'

import WizardModal from './wizard_form/WizardModal'

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
      <div>
        <WizardModal />
        <Link to={'/animals'}>
          Zie alle beesten
        </Link>
      </div>
    )
  }
}

export default connect(mapDispatchToProps)(Landing);

