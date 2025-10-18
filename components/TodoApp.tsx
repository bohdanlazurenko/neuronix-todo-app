'use client'

import { useState, useEffect } from 'react'
import { Todo, TodoFilter } from '@/lib/types'
import { getTodos, saveTodos, generateId } from '@/lib/utils'
import TodoItem from './TodoItem'
import TodoFilters from './TodoFilters'

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputValue, setInputValue] = useState('')
  const [filter, setFilter] = useState<TodoFilter>('all')

  useEffect(() => {
    setTodos(getTodos())
  }, [])

  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  const addTodo = () => {
    const trimmed = inputValue.trim()
    if (!trimmed) return

    const newTodo: Todo = {
      id: generateId(),
      text: trimmed,
      completed: false,
      createdAt: new Date()
    }

    setTodos([newTodo, ...todos])
    setInputValue('')
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.filter(todo => todo.completed).length

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="What needs to be done?"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={addTodo}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </div>

      <TodoFilters filter={filter} setFilter={setFilter} />

      <div className="space-y-2">
        {filteredTodos.length === 0 ? (
          <p className="text-center text-gray-500 py-8">
            {filter === 'completed' && 'No completed tasks'}
            {filter === 'active' && 'No active tasks'}
            {filter === 'all' && 'No tasks yet. Add one above!'}
          </p>
        ) : (
          filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>

      {todos.length > 0 && (
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <span className="text-sm text-gray-600">
            {activeCount} {activeCount === 1 ? 'item' : 'items'} left
          </span>
          {completedCount > 0 && (
            <button
              onClick={clearCompleted}
              className="text-sm text-red-500 hover:text-red-600 transition-colors"
            >
              Clear completed
            </button>
          )}
        </div>
      )}
    </div>
  )
}