import { FiUsers, FiTrendingUp, FiCheckCircle, FiClock } from 'react-icons/fi'

const RecentActivity = ({ activities = [] }) => {
  const defaultActivities = [
    { id: 1, type: 'customer', message: 'New customer added: Tech Innovations Ltd', time: '2 hours ago' },
    { id: 2, type: 'lead', message: 'Lead status changed to "Qualified"', time: '4 hours ago' },
    { id: 3, type: 'task', message: 'Task completed: Follow-up call with client', time: '6 hours ago' },
    { id: 4, type: 'customer', message: 'Customer updated: Global Solutions Inc', time: '1 day ago' },
    { id: 5, type: 'lead', message: 'New lead added: Digital Marketing Pro', time: '1 day ago' },
    { id: 6, type: 'task', message: 'Task created: Prepare proposal document', time: '2 days ago' }
  ]

  const displayActivities = activities.length > 0 ? activities : defaultActivities

  const getIcon = (type) => {
    switch (type) {
      case 'customer':
        return <FiUsers className="text-blue-600" size={18} />
      case 'lead':
        return <FiTrendingUp className="text-green-600" size={18} />
      case 'task':
        return <FiCheckCircle className="text-purple-600" size={18} />
      default:
        return <FiClock className="text-gray-600" size={18} />
    }
  }

  const getBgColor = (type) => {
    switch (type) {
      case 'customer':
        return 'bg-blue-50'
      case 'lead':
        return 'bg-green-50'
      case 'task':
        return 'bg-purple-50'
      default:
        return 'bg-gray-50'
    }
  }

  return (
    <div className="card h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
          <p className="text-sm text-gray-600 mt-1">Latest updates</p>
        </div>
      </div>

      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
        {displayActivities.map((activity) => (
          <div 
            key={activity.id} 
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className={`p-2 rounded-lg ${getBgColor(activity.type)} flex-shrink-0`}>
              {getIcon(activity.type)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900 font-medium">{activity.message}</p>
              <p className="text-xs text-gray-500 mt-1 flex items-center">
                <FiClock size={12} className="mr-1" />
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
          View all activity →
        </button>
      </div>
    </div>
  )
}

export default RecentActivity