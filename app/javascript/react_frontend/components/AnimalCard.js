import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import deleteAnimal from '../redux/actions/deleteAnimalActions'

const mapDispatchToProps = dispatch => (
  bindActionCreators({deleteAnimal}, dispatch)
)

class AnimalCard extends React.Component {
  render() {
    const { animal, i } = this.props;
    return (
      <div>
        <button onClick={() => this.props.deleteAnimal(animal.id)} >Delete animal</button>
        <Link to={`/animals/${animal.id}`}>
          {animal.name}
        </Link>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(AnimalCard);
