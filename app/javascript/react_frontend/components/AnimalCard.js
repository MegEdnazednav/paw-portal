import React from 'react';
import { Link } from 'react-router-dom'

class AnimalCard extends React.Component {
  render() {
    const { animal, i } = this.props;
    return (
      <div>
        <Link to={`/animals/${animal.id}`}>
          {animal.name}
        </Link>
      </div>
    )
  }
}

export default AnimalCard;
