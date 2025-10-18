import { TodoFilter } from '@/lib/types'

interface TodoFiltersProps {
  filter: TodoFilter
  setFilter: (filter: TodoFilter) => void
}

export default function TodoFilters({ filter, setFilter }: TodoFiltersProps) {
  const filters: { value: TodoFilter; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' },
  ]

  return (
    <div className="flex gap-2 justify-center">
      {filters.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => setFilter(value)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filter === value
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}