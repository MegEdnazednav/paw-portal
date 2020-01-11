import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { withRouter } from 'react-router-dom';
import { history } from '../store'

import updateAnimal from '../redux/actions/updateAnimalActions';

const mapDispatchToProps = dispatch => {
  return bindActionCreators({updateAnimal}, dispatch)
}

class EditAnimal extends React.Component {

  state = { name: this.props.animal.name,
            age: this.props.animal.age,
            kind: this.props.animal.kind,
            description: this.props.animal.description
          };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateAnimal(this.props.animal.id, this.state);
    history.push('/')
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>EDIT THIS ANIMAL</div>
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
          onChange={event => this.setState({ kind: event.target.value })}>
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
        <button>UPDATE THE BEAST</button>
      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(EditAnimal);
