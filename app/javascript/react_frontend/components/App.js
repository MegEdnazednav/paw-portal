import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import fetchAnimals from '../redux/actions/fetchAnimalsActions'

import AnimalList from './AnimalList'

const mapStateToProps = state => {
  return { animals: state.animals.animals };
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({fetchAnimals}, dispatch)
)

class App extends React.Component {

  componentDidMount() {
    this.props.fetchAnimals();
  }

  render() {
    return (
      <div>
        <AnimalList animals={this.props.animals} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

