import { Todo } from './types'

const STORAGE_KEY = 'neuronix-todos'

export const getTodos = (): Todo[] => {
  if (typeof window === 'undefined') return []
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return []
    
    const todos = JSON.parse(stored)
    return todos.map((todo: any) => ({
      ...todo,
      createdAt: new Date(todo.createdAt)
    }))
  } catch {
    return []
  }
}

export const saveTodos = (todos: Todo[]): void => {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  } catch {
    // Silently fail if localStorage is not available
  }
}

export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9)
}
