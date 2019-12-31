import { FETCH_ANIMALS_PENDING,
         FETCH_ANIMALS_SUCCESS,
         FETCH_ANIMALS_ERROR,
         INCREMENT_LIKES } from '../actions/fetchAnimalsActions';

const initialState = {
  pending: false,
  animals: [],
  error: null
}

export function animals(state = initialState, action) {
  switch(action.type) {
    case FETCH_ANIMALS_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_ANIMALS_SUCCESS:
      return {
        ...state,
        pending: false,
        animals: action.payload
      }
    case FETCH_ANIMALS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}
