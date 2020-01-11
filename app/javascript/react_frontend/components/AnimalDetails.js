import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import fetchAnimal from '../redux/actions/fetchAnimalActions'

import EditAnimal from './EditAnimal'

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.animalId);
  const animal = state.animals.animals.find(animal => animal.id === id);
  return { animal };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchAnimal}, dispatch)
};

class AnimalDetails extends React.Component {

  state = { isEditing: false };

  toggleEdit = () => {
    this.setState({isEditing: !this.state.isEditing})
  }

  componentDidMount() {
    if (!this.props.animal) {
      this.props.fetchAnimal(this.props.match.params.animalId);
    }
  }

  render() {
    if (!this.props.animal) {
      return <p>Loading...</p>;
    }

    if (this.state.isEditing) {
      return (
      <div>
        <EditAnimal
          animal={ this.props.animal }
          key={ this.props.animal.id }
        />
      </div>
      )
    }

    return (
      <div>
        <h1>{this.props.animal.name} ({this.props.animal.age})</h1>
        <p>{this.props.animal.description}</p>
        <p>{this.props.animal.kind}</p>
        <button onClick={this.toggleEdit}>EDIT THIS BEAST</button>
        <img src={ "https://www.sciencemag.org/sites/default/files/styles/inline__699w__no_aspect/public/dogs_1280p_0.jpg?itok=_Ch9dkfK"}  alt="doggos" />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalDetails);
