import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import createAnimal from '../redux/actions/createAnimalActions';

import ImageUploader from './ImageUploader';

class NewAnimal extends React.Component {

  onSubmit = (values) => {
    this.props.createAnimal(values, (new_animal) => {
      this.props.history.push('/');
      return new_animal;
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  render() {

    return (
      <div>
        <p>Make new animal</p>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Name"
            name="name"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Age"
            name="age"
            type="number"
            component={this.renderField}
          />
          <Field
            label="Kind"
            name="kind"
            type="text"
            component={this.renderField}
          />
          <label htmlFor="content">Description</label>
          <Field
            className="form-control"
            label="Description"
            name="description"
            component="textarea"
            rows="8"
          />
          <ImageUploader
            label="Photos"
            name="photos"
          />
          <button className="btn btn-primary" type="submit" disabled={this.props.pristine || this.props.submitting}>
            Create Beast
          </button>
        </form>
      </div>
    )
  }
}

export default reduxForm({ form: 'newAnimalForm' })(
  connect(null, { createAnimal })(NewAnimal)
);
