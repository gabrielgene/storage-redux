import {
  ADD_STORAGE,
  REMOVE_STORAGE
} from '../actions'

const initialState = { storage: [] };

export default function storage(state = initialState, action) {
  switch (action.type) {
    case ADD_STORAGE:
      return {
        ...state,
        storage: [
          ...state.storage,
          action.item,
        ],
      };
    case REMOVE_STORAGE:
      return {
        ...state,
        storage: state.storage.filter( obj => obj.id !== action.id),
      };
    default:
      return state
  }
}