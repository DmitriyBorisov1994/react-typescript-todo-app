import React from 'react'
import { ITodo } from '../interfaces'

type TodoListProps = {
   todos: ITodo[],
   onToggle(id:number):void,
   onRemove(id:number):void
}

export const Todolist: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {

const removeHandler = (event:React.MouseEvent, id:number)=>{
   event.preventDefault()
   onRemove(id)
}

   if (!todos.length) return <p className='center'>No todos</p>
   return (
      <ul className='mt-3'>
         {todos.map(todo => {
            const textClasses=[]
            if (todo.completed) textClasses.push('completed')
            return (
               <li className="col s12 m7" key={todo.id}>
                  <div className="card horizontal mt-2">
                     <div className="card-stacked">
                        <div className="card-content">
                           <p className={textClasses.join(' ')}>{todo.title}</p>
                        </div>
                        <div className="card-action">
                           <label>
                              <input type="checkbox" checked={todo.completed} onChange={()=>onToggle(todo.id)}/>
                              <span></span>
                              <i className="material-icons red-text text-darken-4 remove-icon" onClick={(event)=>removeHandler(event, todo.id)}>delete</i>
                           </label>
                        </div>
                     </div>
                  </div>
               </li>
            )
         })}

      </ul>
   )
}
