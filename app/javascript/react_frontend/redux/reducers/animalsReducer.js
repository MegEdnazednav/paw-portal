import { FETCH_ANIMALS_PENDING,
         FETCH_ANIMALS_SUCCESS,
         FETCH_ANIMALS_ERROR } from '../actions/fetchAnimalsActions';
import { DELETE_ANIMAL } from '../actions/deleteAnimalActions'

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
    case DELETE_ANIMAL:
      return {
        ...state,
        animals: state.animals.filter(animal => animal.id !== action.payload)
      }
    default:
      return state;
  }
}
