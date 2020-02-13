import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import fetchAnimals from '../redux/actions/fetchAnimalsActions'

import AnimalCard from './AnimalCard'

const mapDispatchToProps = dispatch => (
  bindActionCreators({fetchAnimals}, dispatch)
)

const mapStateToProps = state => {
  return { animals: state.animals.animals };
}

class AnimalList extends React.Component {

  componentDidMount() {
    this.props.fetchAnimals(this.state);
  }

  render() {
    return (
      <div>
        <Fab variant="extended" color="primary" aria-label="add" component={Link} to={'animals/new'} >
          <AddIcon />Add Dog
        </Fab>

        <div>Multi animals</div>
        {this.props.animals.map((animal) =>
          <AnimalCard
            {...this.props}
            key={animal.id}
            animal = {animal}
          />
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalList);
