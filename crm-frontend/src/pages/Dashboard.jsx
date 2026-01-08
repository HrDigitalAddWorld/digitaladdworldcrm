import { useState, useEffect } from 'react'
import { FiUsers, FiTrendingUp, FiCheckCircle, FiDollarSign } from 'react-icons/fi'
import StatsCard from '../components/dashboard/StatesCard'
import RevenueChart from '../components/dashboard/RevenueChart'
import RecentActivity from '../components/dashboard/RecentActivity'
import { getDashboardStats } from '../services/api'
import toast from 'react-hot-toast'

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalCustomers: 0,
    totalLeads: 0,
    totalTasks: 0,
    totalRevenue: 0,
    recentActivities: []
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await getDashboardStats()
      setStats(response.data)
    } catch (error) {
      toast.error('Failed to load dashboard data')
      setStats({
        totalCustomers: 247,
        totalLeads: 89,
        totalTasks: 34,
        totalRevenue: 125000,
        recentActivities: [
          { id: 1, type: 'customer', message: 'New customer added: Acme Corp', time: '2 hours ago' },
          { id: 2, type: 'lead', message: 'Lead converted: Tech Solutions', time: '5 hours ago' },
          { id: 3, type: 'task', message: 'Task completed: Follow up call', time: '1 day ago' }
        ]
      })
    } finally {
      setLoading(false)
    }
  }

  const statsCards = [
    {
      title: 'Total Customers',
      value: stats.totalCustomers,
      change: '+12.5%',
      icon: FiUsers,
      color: 'blue',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Active Leads',
      value: stats.totalLeads,
      change: '+8.2%',
      icon: FiTrendingUp,
      color: 'green',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      title: 'Tasks Pending',
      value: stats.totalTasks,
      change: '-3.1%',
      icon: FiCheckCircle,
      color: 'yellow',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      title: 'Total Revenue',
      value: `₹${(stats.totalRevenue / 1000).toFixed(0)}K`,
      change: '+15.3%',
      icon: FiDollarSign,
      color: 'purple',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
        </div>
        <button className="btn btn-primary">
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <RecentActivity activities={stats.recentActivities} />
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all">
            <FiUsers className="text-primary-600 mb-2" size={32} />
            <span className="text-sm font-medium text-gray-700">Add Customer</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all">
            <FiTrendingUp className="text-primary-600 mb-2" size={32} />
            <span className="text-sm font-medium text-gray-700">New Lead</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all">
            <FiCheckCircle className="text-primary-600 mb-2" size={32} />
            <span className="text-sm font-medium text-gray-700">Create Task</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all">
            <FiDollarSign className="text-primary-600 mb-2" size={32} />
            <span className="text-sm font-medium text-gray-700">Add Deal</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard