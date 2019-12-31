export const FETCH_ANIMAL_PENDING = 'FETCH_ANIMAL_PENDING';
export const FETCH_ANIMAL_SUCCESS = 'FETCH_ANIMAL_SUCCESS';
export const FETCH_ANIMAL_ERROR   = 'FETCH_ANIMAL_ERROR';
export const INCREMENT_LIKES      = 'INCREMENT_LIKES';

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

function increment(index) {
  return {
    type: INCREMENT_LIKES,
    index
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
