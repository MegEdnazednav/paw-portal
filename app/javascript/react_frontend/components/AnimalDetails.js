import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import fetchAnimal from '../redux/actions/fetchAnimalActions'

const mapStateToProps = state => {
  return { animal: state.animal.animal };
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({fetchAnimal}, dispatch)
)

class AnimalDetails extends React.Component {

  componentDidMount() {
    this.props.fetchAnimal(this.props.match.params.animalId);
  }

  render() {
    return (
      <div>
        <p>{this.props.animal.name} ({this.props.animal.age})</p>
        <p>{this.props.animal.description}</p>
        <img src={ "https://www.sciencemag.org/sites/default/files/styles/inline__699w__no_aspect/public/dogs_1280p_0.jpg?itok=_Ch9dkfK"}  alt="doggos" />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalDetails);
