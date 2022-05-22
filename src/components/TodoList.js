import React from 'react'
import Todo from './Todo'

export default function TodoList({todos,setTodos}) {
  return (
      <div>
          <ul className='todo-list'>
              {
                   todos.map(todo => (
                    <Todo
                    text={todo.text} 
                    key={todo.id} />
                ))
              }
          </ul>
      </div>
  )
}
