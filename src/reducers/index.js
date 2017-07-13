import {
  ADD_STORAGE,
  REMOVE_STORAGE
} from '../actions'


export default function storage(state = [], action) {
  switch (action.type) {
    case ADD_STORAGE:
      return [
        ...state,
         action.item
      ]
    case REMOVE_STORAGE:
      return state.filter( obj => obj.id !== 1)
    default:
      return state
  }
}