export const CREATE_ANIMAL_PENDING = 'CREATE_ANIMAL_PENDING';
export const CREATE_ANIMAL_SUCCESS = 'CREATE_ANIMAL_SUCCESS';
export const CREATE_ANIMAL_ERROR   = 'CREATE_ANIMAL_ERROR';

function createAnimalPending() {
  return {
    type: CREATE_ANIMAL_PENDING
  }
}

function createAnimalSuccess(animal) {
  return {
    type: CREATE_ANIMAL_SUCCESS,
    payload: animal
  }
}

function createAnimalError(error) {
  return {
    type: CREATE_ANIMAL_ERROR,
    error
  }
}

function createAnimal(body) {
  return async dispatch => {
    dispatch(createAnimalPending());
    try {
      const response = await fetch('/api/v1/animals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                   'Accept': 'application/json',
                   'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                 },
        body: JSON.stringify(body)
      });
      const new_animal = await response.json();
      dispatch(createAnimalSuccess(new_animal));
    }
    catch(error) {
      dispatch(createAnimalError(error));
    }
  }
}

export default createAnimal;
