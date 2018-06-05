import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo'
import { addTodo } from '../actions/todos';
import './TodoList.css'

const TodoList = (props) => (
  <div className="container">
    <h2 className="text-center">Fitness Tracker</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Exercise</th>
            <th scope="col">Distance / Reps</th>
          </tr>
        </thead>
        <tbody>
        {props.todos.todos.map((todo) => {
          return <Todo key={todo.id} {...todo} />
        })
        }
        </tbody>
      </table>
      <form onSubmit={(e) => {
          e.preventDefault();
          
          props.dispatch(addTodo({ text: e.target.todo.value, miles: e.target.miles.value, exercise: e.target.exercise.value }));
        }}>
        <div className="form-group">
          <label>Exercise Type</label>
          <select className="form-control" name="exercise" >
            <option value='cardio'>Cardio</option>
            <option value='resistance'>Resistance</option>
          </select>
        </div>
        <div className="form-group">
          <label>Exercise Name</label>
          <input type="text" className="form-control" name="todo"  required />
        </div>
        <div className="form-group">
          <label>Distance / Reps</label>
          <input type="text" className="form-control" name="miles" required />
        </div>  
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
  </div>  
)

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filters: state.filters
  }
}

export default connect(mapStateToProps)(TodoList);