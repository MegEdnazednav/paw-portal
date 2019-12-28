import React from 'react';
import AnimalCard from './AnimalCard'

class AnimalList extends React.Component {

  render() {
    return (
      <div>
        <div>Multi animals</div>
        {this.props.animals.map((animal, i) =>
          <AnimalCard
            {...this.props}
            key={i}
            i = {i}
            animal = {animal}
          />
        )};
      </div>
    )
  }
}

export default AnimalList;
