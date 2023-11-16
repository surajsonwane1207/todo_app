import React from 'react'

function Todo(props) {
    console.log(props)
  return (
    <>
    <div>{props.todo.id}</div>
    <div>{props.todo.text}</div>
    </>
  )
}

export default Todo