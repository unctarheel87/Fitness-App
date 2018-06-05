
import uuid from 'uuid';

let date = new Date().toLocaleString([], {month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit'});

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
      case 'ADD_TODO':
        return Object.assign({}, state, {
          todos: [
            ...state.todos,
            {
              id: uuid(),
              exercise: action.exercise,
              date: new Date().toLocaleString([], {month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit'}),
              text: action.text,
              miles: action.miles
            }
          ]
        })
      case 'REMOVE_TODO':
        return Object.assign({}, state, {
          todos: state.todos.filter((todo) => {
                   return todo.id !== action.id
                })
        })
      default:
        return state
  }
}

const initialState = {
  todos: [
    {id: uuid(), exercise: 'cardio', date: date, text: 'Long Run', miles: 5.5},
    {id: uuid(), exercise: 'cardio', date: date, text: 'Short Run', miles: 2.1},
    {id: uuid(), exercise: 'resistance', date: date, text: 'Biceps', miles: 4 + ' x ' + 10},
    {id: uuid(), exercise: 'resistance', date: date, text: 'Bench Press', miles: 4 + ' x ' + 12},
    ]
  }