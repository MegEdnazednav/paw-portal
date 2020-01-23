import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import createAnimal from '../redux/actions/createAnimalActions';

import ImageUploader from './ImageUploader'

const mapDispatchToProps = dispatch => {
  return bindActionCreators({createAnimal}, dispatch)
}

class NewAnimal extends React.Component {

  state = { name: '',
            age: '',
            kind: '',
            description: '',
            primary_image: null
          };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createAnimal(this.state);
    this.props.history.push('/')
  };

  selectImage = image => this.setState({ primary_image: image });

  unselectImage = () => this.setState({ primary_image: '' });

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>MAKE NEW ANIMAL</div>
        <input
          type="text"
          value={this.state.name}
          onChange={event => this.setState({ name: event.target.value })}
          placeholder="Name"
          required
        />
        <input
          type="number"
          value={this.state.age}
          onChange={event => this.setState({ age: event.target.value })}
          placeholder="Age"
          required
        />
        <select
          value={this.state.kind}
          onChange={event => this.setState({ kind: event.target.value })}
          required>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
        <textarea
          type="description"
          value={this.state.description}
          onChange={event => this.setState({ description: event.target.value })}
          placeholder="Description"
          required
        />
        <ImageUploader
          // image={editableRecipe.image}
          selectImage={this.selectImage}
          unselectImage={this.unselectImage} />
        <button>CREATE THE BEAST</button>
      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(NewAnimal);
