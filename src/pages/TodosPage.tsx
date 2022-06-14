import React, { useState, useEffect } from 'react'
import { AddTodo } from '../components/AddTodo';
import { Todolist } from '../components/Todolist';
import { ITodo } from '../interfaces';

const TodosPage: React.FC = () => {
   const initialState = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
   const [todos, setTodos] = useState<ITodo[]>(initialState)

   useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
      setTodos(saved)
   }, [])

   const addTodo = (title: string) => {
      const newTodo: ITodo = {
         title,
         id: Date.now(),
         completed: false
      }
      setTodos(prev => [newTodo, ...prev])
   }

   const toggleCompleted = (id: number) => {
      setTodos(prev => prev.map(todo => {
         if (todo.id === id) {
            return { ...todo, completed: !todo.completed }
         }
         return todo
      }))
   }

   const removeTodo = (id: number) => {
      setTodos(prev => prev.filter(todo => todo.id !== id))
   }

   return (
      <div className='container'>
         <AddTodo onAdd={addTodo} />
         <Todolist todos={todos} onToggle={toggleCompleted} onRemove={removeTodo} />
      </div>
   )
}

export default TodosPage