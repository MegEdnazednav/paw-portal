import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import * as actionCreators from '../redux/actions/actionCreators'
import fetchAnimals from '../redux/actions/actionCreators'

import AnimalList from './AnimalList'

const mapStateToProps = state => {
  return { animals: state.animals };
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
          <AnimalList animals={this.props.animals.animals} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

