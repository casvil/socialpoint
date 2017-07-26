export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const addTodo = (imgFile) => ({
  type: 'ADD_TODO',
  imgFile: imgFile
  //nextId++
});
