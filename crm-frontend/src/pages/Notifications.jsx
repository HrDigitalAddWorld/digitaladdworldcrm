import { useState } from 'react'
import { FiBell, FiCheck, FiTrash2, FiFilter, FiUsers, FiTrendingUp, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

const Notifications = () => {
  const [filter, setFilter] = useState('all')
  
  const notifications = [
    {
      id: 1,
      type: 'success',
      icon: FiCheckCircle,
      title: 'Lead Converted',
      message: 'Tech Solutions Ltd has been successfully converted to a customer!',
      time: '5 minutes ago',
      read: false,
      color: 'green'
    },
    {
      id: 2,
      type: 'info',
      icon: FiUsers,
      title: 'New Customer Added',
      message: 'Acme Corporation has been added to your customer list.',
      time: '1 hour ago',
      read: false,
      color: 'blue'
    },
    {
      id: 3,
      type: 'warning',
      icon: FiAlertCircle,
      title: 'Task Due Soon',
      message: 'Follow up with Global Industries is due in 2 hours.',
      time: '2 hours ago',
      read: false,
      color: 'yellow'
    },
    {
      id: 4,
      type: 'info',
      icon: FiTrendingUp,
      title: 'Deal Stage Updated',
      message: 'Digital Marketing Pro moved to "Proposal" stage.',
      time: '3 hours ago',
      read: true,
      color: 'purple'
    },
    {
      id: 5,
      type: 'success',
      icon: FiCheckCircle,
      title: 'Task Completed',
      message: 'You marked "Prepare presentation" as completed.',
      time: '5 hours ago',
      read: true,
      color: 'green'
    },
    {
      id: 6,
      type: 'info',
      icon: FiUsers,
      title: 'New Lead Assigned',
      message: 'Cloud Solutions Inc has been assigned to you.',
      time: '1 day ago',
      read: true,
      color: 'blue'
    },
    {
      id: 7,
      type: 'warning',
      icon: FiAlertCircle,
      title: 'Overdue Task',
      message: 'Review contract with Global Inc is overdue by 1 day.',
      time: '1 day ago',
      read: true,
      color: 'red'
    },
    {
      id: 8,
      type: 'success',
      icon: FiTrendingUp,
      title: 'Revenue Milestone',
      message: 'Congratulations! You\'ve reached ₹100K in revenue this month.',
      time: '2 days ago',
      read: true,
      color: 'green'
    }
  ]

  const filteredNotifications = filter === 'all' 
    ? notifications 
    : filter === 'unread' 
    ? notifications.filter(n => !n.read)
    : notifications.filter(n => n.read)

  const unreadCount = notifications.filter(n => !n.read).length

  const markAllAsRead = () => {
    // Logic to mark all as read
  }

  const deleteNotification = (id) => {
    // Logic to delete notification
  }

  const getIconColor = (color) => {
    const colors = {
      green: 'text-green-600 bg-green-100',
      blue: 'text-blue-600 bg-blue-100',
      yellow: 'text-yellow-600 bg-yellow-100',
      purple: 'text-purple-600 bg-purple-100',
      red: 'text-red-600 bg-red-100'
    }
    return colors[color] || 'text-gray-600 bg-gray-100'
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center space-x-3">
            <FiBell className="text-primary-600" />
            <span>Notifications</span>
          </h1>
          <p className="text-gray-600 mt-1">
            Stay updated with all your important activities
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={markAllAsRead}
            className="btn btn-secondary flex items-center space-x-2"
          >
            <FiCheck size={18} />
            <span>Mark all as read</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Total Notifications</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{notifications.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <FiBell className="text-blue-600" size={24} />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Unread</p>
              <p className="text-2xl font-bold text-orange-600 mt-2">{unreadCount}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <FiAlertCircle className="text-orange-600" size={24} />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Read</p>
              <p className="text-2xl font-bold text-green-600 mt-2">
                {notifications.length - unreadCount}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <FiCheckCircle className="text-green-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="card">
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {[
              { key: 'all', label: 'All Notifications' },
              { key: 'unread', label: 'Unread' },
              { key: 'read', label: 'Read' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === tab.key
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <button className="btn btn-secondary flex items-center space-x-2">
            <FiFilter size={18} />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.length === 0 ? (
          <div className="card text-center py-12">
            <FiBell className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-500">No notifications found</p>
          </div>
        ) : (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`card hover:shadow-lg transition-all cursor-pointer ${
                !notification.read ? 'border-l-4 border-primary-500 bg-primary-50/30' : ''
              }`}
            >
              <div className="flex items-start space-x-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${getIconColor(notification.color)}`}>
                  <notification.icon size={24} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                    {!notification.read && (
                      <span className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0 mt-2"></span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-2">
                  {!notification.read && (
                    <button
                      className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                      title="Mark as read"
                    >
                      <FiCheck size={18} />
                    </button>
                  )}
                  <button
                    onClick={() => deleteNotification(notification.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Notifications