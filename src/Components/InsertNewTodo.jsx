import React from 'react'
import ns from '../css/insertNewTodo.module.css'

function NewSpace({ addTodo }) {
  const [value, setValue] = React.useState('')


  function addNewTodo (e) {
    addTodo(value)
    setValue('')
  }

  return (
    <div className={ns.NewSpace}>
      <input type='text' placeholder='Add New Item' value={value} onChange={(e) => setValue(e.target.value)}></input>
      <button onClick={addNewTodo}>Add</button>
    </div>
  )
}

export default NewSpace