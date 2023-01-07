import React from 'react'
import todo from '../css/todo.module.css'
import { FaArchive, FaTrash, FaEdit } from "react-icons/fa"

function Todo({ todo: todoItem, index, deleteTodo, editTodo: editTodoItem }) {

  const [edit, setEdit] = React.useState(false)
  const [editStyle, setEditStyle] = React.useState("")


  function del(index) {
    deleteTodo(index)
  }
  function editTodo(e){
    setEdit(true)
    setEditStyle(todo.editblock)
  }
  function saveEdit(e){
    setEdit(false)
    setEditStyle("")
  }
  function changeValue(){
    editTodoItem(index)
  }
  return (
    <div className={todo.Todo}  >
      <label className={todo.Form__Control} onClick={(e)=>e.preventDefault()} onBlur={saveEdit}>
        <input type='checkbox' name='checkbox' />
        <span className={editStyle} contentEditable={edit} onInput={changeValue}>{todoItem}</span>
      </label>
      <div className={todo.OtherOptions}>
        <button className={todo.Edit} onClick={editTodo}><FaEdit /></button>
        <button><FaArchive /></button>
        <button onClick={() => { del(index) }} ><FaTrash /></button>
      </div>
    </div>
  )
}

export default Todo