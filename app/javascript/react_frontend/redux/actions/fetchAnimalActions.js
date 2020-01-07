export const FETCH_ANIMAL_PENDING = 'FETCH_ANIMAL_PENDING';
export const FETCH_ANIMAL_SUCCESS = 'FETCH_ANIMAL_SUCCESS';
export const FETCH_ANIMAL_ERROR   = 'FETCH_ANIMAL_ERROR';

function fetchAnimalPending() {
  return {
    type: FETCH_ANIMAL_PENDING
  }
}

function fetchAnimalSuccess(animal) {
  return {
    type: FETCH_ANIMAL_SUCCESS,
    payload: animal
  }
}

function fetchAnimalError(error) {
  return {
    type: FETCH_ANIMAL_ERROR,
    error
  }
}

function fetchAnimal(id) {
  return async dispatch => {
    dispatch(fetchAnimalPending());
    try {
      const result = await fetch(`/api/v1/animals/${id}`);
      const animal = await result.json();
      dispatch(fetchAnimalSuccess(animal));
    }
    catch(error) {
      dispatch(fetchAnimalError(error));
    }
  }
}

export default fetchAnimal;
