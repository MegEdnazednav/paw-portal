import { FETCH_ANIMALS_PENDING,
         FETCH_ANIMALS_SUCCESS,
         FETCH_ANIMALS_ERROR,
         INCREMENT_LIKES } from '../actions/actionCreators';

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
