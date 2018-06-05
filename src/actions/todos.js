export const addTodo = function({ id = 0, text = '', miles = '', date = '', exercise = '' }) {
  return {
    type: 'ADD_TODO',
    id,
    exercise,
    date,
    text,
    miles
  }
}

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}