import React from 'react';
import { Link } from 'react-router-dom'

import AnimalCard from './AnimalCard'

class AnimalList extends React.Component {

  render() {
    return (
      <div>
      <Link to={'animals/new'} style={{ textDecoration: 'none', border: '2px solid black' }}>
         I want to add new doggoooow
       </Link>
       <br />
       <br />
       <br />
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
