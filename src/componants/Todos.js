import React from 'react'
import Todo from './Todo'

function Todos(props) {
    console.log(props)
  return (
    props.todos.map((todo)=>{
        <Todo todo={todo} key={todo.id}/>
    })
  )
}

export default Todos