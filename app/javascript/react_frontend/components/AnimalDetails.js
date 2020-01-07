import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import fetchAnimal from '../redux/actions/fetchAnimalActions'

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.animalId);
  const animal = state.animals.animals.find(animal => animal.id === id);
  return { animal };
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({fetchAnimal}, dispatch)
)

class AnimalDetails extends React.Component {

  componentDidMount() {
    if (!this.props.animal) {
      this.props.fetchAnimal(this.props.match.params.animalId);
    }
  }

  render() {
    if (!this.props.animal) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h1>{this.props.animal.name} ({this.props.animal.age})</h1>
        <p>{this.props.animal.description}</p>
        <img src={ "https://www.sciencemag.org/sites/default/files/styles/inline__699w__no_aspect/public/dogs_1280p_0.jpg?itok=_Ch9dkfK"}  alt="doggos" />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalDetails);
