import React from 'react';
import Button from '@material-ui/core/Button';

export default class ContainedButtons extends React.Component {
  render() {
    return (
      <div>
        <Button variant="contained"
                onClick={this.props.click}
        >
        {this.props.buttonText}</Button>
      </div>
    );
  }
}
