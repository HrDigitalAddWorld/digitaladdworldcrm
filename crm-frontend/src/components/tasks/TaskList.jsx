import { FiEdit2, FiTrash2, FiCalendar, FiUser } from 'react-icons/fi'
import { format } from 'date-fns'

const TaskList = ({ tasks, onEdit, onDelete, onStatusChange }) => {
  const getPriorityColor = (priority) => {
    const colors = {
      high: 'badge-danger',
      medium: 'badge-warning',
      low: 'badge-info'
    }
    return colors[priority] || 'badge-info'
  }

  const getStatusColor = (status) => {
    const colors = {
      pending: 'badge-warning',
      'in-progress': 'badge-info',
      completed: 'badge-success'
    }
    return colors[status] || 'badge-info'
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {tasks.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-gray-500">No tasks found. Create your first task to get started.</p>
        </div>
      ) : (
        tasks.map((task) => (
          <div key={task._id} className="card hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
                  <span className={`badge ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                  <span className={`badge ${getStatusColor(task.status)}`}>
                    {task.status}
                  </span>
                </div>
                
                {task.description && (
                  <p className="text-sm text-gray-600 mb-3">{task.description}</p>
                )}

                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  {task.dueDate && (
                    <div className="flex items-center space-x-1">
                      <FiCalendar size={14} />
                      <span>Due: {format(new Date(task.dueDate), 'MMM dd, yyyy')}</span>
                    </div>
                  )}
                  {task.assignedTo && (
                    <div className="flex items-center space-x-1">
                      <FiUser size={14} />
                      <span>{task.assignedTo}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <select
                  value={task.status}
                  onChange={(e) => onStatusChange(task._id, e.target.value)}
                  className="text-xs px-2 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
                <button
                  onClick={() => onEdit(task)}
                  className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  <FiEdit2 size={16} />
                </button>
                <button
                  onClick={() => onDelete(task._id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <FiTrash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default TaskList