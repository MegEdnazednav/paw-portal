export const FETCH_ANIMALS_PENDING = 'FETCH_ANIMALS_PENDING';
export const FETCH_ANIMALS_SUCCESS = 'FETCH_ANIMALS_SUCCESS';
export const FETCH_ANIMALS_ERROR   = 'FETCH_ANIMALS_ERROR';
export const INCREMENT_LIKES       = 'INCREMENT_LIKES';

function fetchAnimalsPending() {
  return {
    type: FETCH_ANIMALS_PENDING
  }
}

function fetchAnimalsSuccess(animals) {
  return {
    type: FETCH_ANIMALS_SUCCESS,
    payload: animals
  }
}

function fetchAnimalsError(error) {
  return {
    type: FETCH_ANIMALS_ERROR,
    error
  }
}

function increment(index) {
  return {
    type: INCREMENT_LIKES,
    index
  }
}

function fetchAnimals() {
  return async dispatch => {
    dispatch(fetchAnimalsPending());
    try {
      const result = await fetch('/api/v1/animals');
      const animals = await result.json();
      console.log(animals);
      dispatch(fetchAnimalsSuccess(animals));
  }
    catch(error) {
      dispatch(fetchAnimalsError(error));
    }
  }
}

export default fetchAnimals;
