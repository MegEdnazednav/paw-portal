import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import DeleteButton from './Button'

import deleteAnimal from '../redux/actions/deleteAnimalActions'

const mapDispatchToProps = dispatch => (
  bindActionCreators({deleteAnimal}, dispatch)
)

class AnimalCard extends React.Component {

  handleClick = () => {
    this.props.deleteAnimal(this.props.animal.id)
  }

  render() {
    return (
      <div>
        <DeleteButton click={this.handleClick}
                      buttonText= "Delete Beast" />
        <Link to={`/animals/${this.props.animal.id}`}>
          {this.props.animal.name}
          {this.props.animal.age} -
          {this.props.animal.outside} -
          {this.props.animal.gender} -
          {this.props.animal.height} -
        </Link>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(AnimalCard);
