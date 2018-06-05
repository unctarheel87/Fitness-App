import React from 'react';
import './todo.css'
import { removeTodo } from '../actions/todos'
import { connect } from 'react-redux'
import { isCompleted, isNotCompleted } from '../actions/filters'

const Todo = ( {dispatch, id, exercise, date, text, miles } ) => {
  return(
        <tr>
          <th scope="row">{exercise === 'resistance' ? <i className="fas fa-dumbbell"></i>: <i className="fas fa-heart"></i>}</th>
          <td>{date}</td>
          <td>{text}</td>
          <td>{exercise === 'resistance' ? miles + ' reps': miles + ' m'}</td>
        </tr>
  
    
   /* <div className="card">
      <div className="card-body">
       <i class="fas fa-dumbbell fa-2x"></i><h4>{text}</h4>
        <h3>{miles}</h3>
        <p>{date}</p>
        <button onClick={() => {
          dispatch(removeTodo(id));  
        }} 
        >Remove</button>
      </div>
    </div>*/
  )  
}

export default connect()(Todo);