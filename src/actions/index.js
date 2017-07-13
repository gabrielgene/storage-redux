export const ADD_STORAGE = 'ADD_STORAGE'

export const REMOVE_STORAGE = 'REMOVE_STORAGE'

export function addStorage(item) {
  return {type: ADD_STORAGE, item }
}

export function removeStorage(item) {
  return {type: REMOVE_STORAGE, item}
}