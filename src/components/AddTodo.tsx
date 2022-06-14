import React, { useRef } from 'react'

interface TodoFormProps {
   onAdd(title: string): void
}

export const AddTodo: React.FC<TodoFormProps> = (props) => {

   const ref = useRef<HTMLInputElement>(null)

   const keyPressHandler = (event: React.KeyboardEvent) => {
      if (event.key === 'Enter') {
         props.onAdd(ref.current!.value)
         ref.current!.value = ''
      }
   }
   const clickHandler = (event: React.MouseEvent) => {
      if (ref.current!.value) {
         props.onAdd(ref.current!.value)
         ref.current!.value = ''
      }
   }
   return (
      <div className='input-field mt-3'>
         <input
            ref={ref}
            id="enter_todo" type="text"
            className="validate"
            placeholder='Type something...'
            onKeyPress={keyPressHandler}
         />
         <label htmlFor="enter_todo" className="active">Enter todo</label>
         <button className="btn-floating btn-large waves-effect waves-light red darken-4 mt-1" onClick={clickHandler}><i className="material-icons">add</i></button>
      </div>
   )
}
