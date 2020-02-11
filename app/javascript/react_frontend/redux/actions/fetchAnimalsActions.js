export const FETCH_ANIMALS_PENDING = 'FETCH_ANIMALS_PENDING';
export const FETCH_ANIMALS_SUCCESS = 'FETCH_ANIMALS_SUCCESS';
export const FETCH_ANIMALS_ERROR   = 'FETCH_ANIMALS_ERROR';

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

function fetchAnimals(params) {
  return async dispatch => {
    dispatch(fetchAnimalsPending());
    try {
      const query = []
      for (let [key, value] of Object.entries(params)) {
        query.push(`${key}=${value}`);
      }
      const result = await fetch(`/api/v1/animals?${query.join('&')}`);
      const animals = await result.json();
      dispatch(fetchAnimalsSuccess(animals));
    }
    catch(error) {
      dispatch(fetchAnimalsError(error));
    }
  }
}

export default fetchAnimals;
