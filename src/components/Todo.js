import React from 'react'

export default function Todo({text}) {
  return (
    <div className='btn-contain'>
        
        <button className='add-btn'>Completed</button>
        <li className='todo-list-item'>
          <h4 className='todo'>
            {text}
          </h4>
        </li>
        
        
        
    </div>
  )
}
