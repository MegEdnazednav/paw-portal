import React from 'react';
import { Link } from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import AnimalCard from './AnimalCard'

class AnimalList extends React.Component {

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

export default AnimalList;
