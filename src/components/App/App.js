import './App.css';
import { useEffect, useState } from 'react';
import Form from '../Form/Form';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([])
  const [allTodos, setAllTodos] = useState(0)
  const [allComplete, setAllComplete] = useState(0)


  // useEffect (()=>{
  //   setAllComplete(todos.filter(todo => todo.done === true).length)
  // })


  const putTodo = (value) => {
    if (value) {
      setTodos([...todos, { id: uuidv4(), text: value, done: false }])
      setAllTodos(allTodos + 1)
    } else {
      alert("Add text!!!")
      
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;
      console.log(todo.id, id);
     
      setAllComplete(todos.filter(todo => todo.done === true).length+1)
      return {
        ...todo,
        done: !todo.done
      }
    }))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
    setAllTodos(allTodos - 1)
  }

  const clearTodos = () => {
    let exit = window.confirm('Точно?')
    if(exit == true){
    setTodos([]);
    setAllTodos(0)
  }else{
    alert('OK')
  }
}

  return (
    <div className="wrapper">
      <div className="container">

        <h1 className="title">TodoList</h1>

        <Form putTodo={putTodo} />

        <ul className="todos">
          {
            todos.map(todo => {
              return (
                <li className={todo.done ? "todo done" : "todo"} key={todo.id} onClick={() => toggleTodo(todo.id)}>
                  {todo.text}
                  <img src="https://cdn.onlinewebfonts.com/svg/download_567411.png" alt="delete" className='delete' 
                  onClick={e => {
                    e.stopPropagation();
                    removeTodo(todo.id);
                  }} />
                </li>
              )
            })
          }
          <button className='btn' onClick={clearTodos}>Clear All</button>
          <div className="info">
            <span>All todos:{allTodos}</span>
            <span>Complete:{allComplete}</span>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
