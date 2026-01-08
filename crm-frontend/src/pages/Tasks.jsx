import { useState, useEffect } from 'react'
import { FiPlus } from 'react-icons/fi'
import TaskList from '../components/tasks/TaskList'
import TaskForm from '../components/tasks/TaskForm'
import { getTasks } from '../services/api'
import toast from 'react-hot-toast'

const Tasks = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)
  const [filterStatus, setFilterStatus] = useState('all')

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try {
      const response = await getTasks()
      setTasks(response.data)
    } catch (error) {
      toast.error('Failed to load tasks')
      setTasks([
        { _id: '1', title: 'Follow up with Acme Corp', description: 'Send proposal and pricing', priority: 'high', status: 'pending', dueDate: '2025-01-15', assignedTo: 'John Doe' },
        { _id: '2', title: 'Prepare presentation for Tech Solutions', description: 'Create demo slides', priority: 'medium', status: 'in-progress', dueDate: '2025-01-18', assignedTo: 'Jane Smith' },
        { _id: '3', title: 'Review contract with Global Inc', description: 'Legal review needed', priority: 'high', status: 'pending', dueDate: '2025-01-16', assignedTo: 'Mike Johnson' },
        { _id: '4', title: 'Update CRM database', description: 'Import new contacts', priority: 'low', status: 'completed', dueDate: '2025-01-10', assignedTo: 'Sarah Williams' }
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (task) => {
    setSelectedTask(task)
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        setTasks(tasks.filter(t => t._id !== id))
        toast.success('Task deleted successfully')
      } catch (error) {
        toast.error('Failed to delete task')
      }
    }
  }

  const handleSubmit = (task) => {
    if (selectedTask) {
      setTasks(tasks.map(t => t._id === selectedTask._id ? task : t))
      toast.success('Task updated successfully')
    } else {
      setTasks([{ ...task, _id: Date.now().toString() }, ...tasks])
      toast.success('Task added successfully')
    }
    setShowForm(false)
    setSelectedTask(null)
  }

  const handleStatusChange = (taskId, newStatus) => {
    setTasks(tasks.map(t => t._id === taskId ? { ...t, status: newStatus } : t))
    toast.success('Task status updated')
  }

  const filteredTasks = filterStatus === 'all' 
    ? tasks 
    : tasks.filter(t => t.status === filterStatus)

  const taskStats = {
    total: tasks.length,
    pending: tasks.filter(t => t.status === 'pending').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    completed: tasks.filter(t => t.status === 'completed').length
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
          <p className="text-gray-600 mt-1">Manage your team's tasks and deadlines</p>
        </div>
        <button
          onClick={() => {
            setSelectedTask(null)
            setShowForm(true)
          }}
          className="btn btn-primary flex items-center space-x-2"
        >
          <FiPlus size={20} />
          <span>Add Task</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card">
          <p className="text-sm text-gray-600 font-medium">Total Tasks</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{taskStats.total}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 font-medium">Pending</p>
          <p className="text-2xl font-bold text-yellow-600 mt-2">{taskStats.pending}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 font-medium">In Progress</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">{taskStats.inProgress}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 font-medium">Completed</p>
          <p className="text-2xl font-bold text-green-600 mt-2">{taskStats.completed}</p>
        </div>
      </div>

      <div className="card">
        <div className="flex space-x-2">
          {[
            { key: 'all', label: 'All Tasks' },
            { key: 'pending', label: 'Pending' },
            { key: 'in-progress', label: 'In Progress' },
            { key: 'completed', label: 'Completed' }
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setFilterStatus(filter.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filterStatus === filter.key
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      ) : (
        <TaskList
          tasks={filteredTasks}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
        />
      )}

      {showForm && (
        <TaskForm
          task={selectedTask}
          onClose={() => {
            setShowForm(false)
            setSelectedTask(null)
          }}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  )
}

export default Tasks