import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import  storage  from './reducers'
import {
  addStorage,
  removeStorage
} from './actions'

let store = createStore(storage)

console.log(store.getState())
const car1 = {id: 1, name: "Carro", price: "10,00"}
const car2 = {id: 2, name: "Carro", price: "10,00"}
store.dispatch(addStorage(car1))
store.dispatch(addStorage(car2))
store.getState().map( obj => console.log(obj))
console.log("______REMOVE______")
store.dispatch(removeStorage(car1))
store.getState().map( obj => console.log(obj))

ReactDOM.render(<App />, document.getElementById('root'));
