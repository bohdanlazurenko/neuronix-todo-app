import TodoApp from '@/components/TodoApp'

export default function Home() {
  return (
    <main className="w-full max-w-2xl">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Neuronix Todo App
        </h1>
        <TodoApp />
      </div>
    </main>
  )
}