import { combineReducers } from 'redux';
import { increment } from './actions';
import { addTodo } from './actions';

const counter = (state = 0, action) => {   //state.counter?
  if (action.type === 'INCREMENT') {
    return state + 1;
  }
  // this.props.counter += 1;
  if (action.type === 'DECREMENT') {
    return state - 1;
    // this.props.counter -= 1;
  }
  return state;
};

let nextId=0;
const todos = (state = [], action) => {
  if (action.type === 'ADD_TODO') {
    nextId += 1;
    return [...state, {id: nextId, imgFile: action.imgFile}];
  }
  // console.log(state);
  return state;
};

// Combining both reducers
const reducers = combineReducers({
  counter,
  todos
});

export default reducers;
