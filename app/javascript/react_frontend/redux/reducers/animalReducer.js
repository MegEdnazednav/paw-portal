import { FETCH_ANIMAL_PENDING,
         FETCH_ANIMAL_SUCCESS,
         FETCH_ANIMAL_ERROR,
         INCREMENT_LIKES } from '../actions/fetchAnimalActions';

const initialState = {
  pending: false,
  animal: [],
  error: null
}

export function animal(state = initialState, action) {
  switch(action.type) {
    case FETCH_ANIMAL_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_ANIMAL_SUCCESS:
      return {
        ...state,
        pending: false,
        animal: action.payload
      }
    case FETCH_ANIMAL_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case INCREMENT_LIKES:
    const i = action.index
      return [
        ...state.slice(0,i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1)
      ]
    default:
      return state;
  }
}
