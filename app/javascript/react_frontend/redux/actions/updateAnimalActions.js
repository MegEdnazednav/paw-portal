export const UPDATE_ANIMAL_PENDING = 'UPDATE_ANIMAL_PENDING';
export const UPDATE_ANIMAL_SUCCESS = 'UPDATE_ANIMAL_SUCCESS';
export const UPDATE_ANIMAL_ERROR   = 'UPDATE_ANIMAL_ERROR';

function updateAnimalPending() {
  return {
    type: UPDATE_ANIMAL_PENDING
  }
}

function updateAnimalSuccess(id, animal) {
  return {
    type: UPDATE_ANIMAL_SUCCESS,
    payload: { id, animal }
  }
}

function updateAnimalError(error) {
  return {
    type: UPDATE_ANIMAL_ERROR,
    error
  }
}

function updateAnimal(id, body) {
  return async dispatch => {
    dispatch(updateAnimalPending());
    try {
      const response = await fetch(`/api/v1/animals/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json',
                   'Accept': 'application/json',
                   'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                 },
        body: JSON.stringify(body)
      });
      const updated_animal = response.json();
      dispatch(updateAnimalSuccess(id, updated_animal));
    }
    catch(error) {
      dispatch(updateAnimalError(error));
    }
  }
}

export default updateAnimal;


