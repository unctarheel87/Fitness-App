export default function filterReducer(state = initialState, action) {
  switch (action.type) {
      case 'IS_COMPLETED':
        return Object.assign({}, state, {
          filters: [
            ...state.filters,
            {
              isCompleted: true
            }
          ]
        });  
      case 'IS_NOT_COMPLETED':
         return Object.assign({}, state, {
          filters: [
            ...state.filters,
            {
              isCompleted: false
            }
          ]
        });  
      default:
        return state
  }
}

const initialState = {
  filters: [
    {isCompleted: false}
  ]
}