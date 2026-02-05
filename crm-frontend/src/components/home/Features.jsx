import { FiUsers, FiTrendingUp, FiBarChart2, FiZap, FiMail, FiCalendar, FiTarget, FiClock, FiShield } from 'react-icons/fi'

const Features = () => {
  const features = [
    {
      icon: FiUsers,
      title: 'Contact Management',
      description: 'Centralize all customer data in one place. Track interactions, manage relationships, and never miss a follow-up.',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiTrendingUp,
      title: 'Sales Pipeline',
      description: 'Visualize your entire sales process with drag-and-drop kanban boards. Track deals from lead to close.',
      color: 'green',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiBarChart2,
      title: 'Advanced Analytics',
      description: 'Make data-driven decisions with real-time reports, forecasting, and customizable dashboards.',
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiZap,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks, set up triggers, and streamline your sales process to save time.',
      color: 'yellow',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FiMail,
      title: 'Email Integration',
      description: 'Sync with Gmail, Outlook, and more. Track emails, schedule campaigns, and manage communications.',
      color: 'red',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: FiCalendar,
      title: 'Task & Calendar',
      description: 'Schedule meetings, set reminders, and manage tasks with integrated calendar functionality.',
      color: 'indigo',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: FiTarget,
      title: 'Lead Scoring',
      description: 'Automatically rank leads based on engagement and behavior to prioritize high-value prospects.',
      color: 'teal',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: FiClock,
      title: 'Time Tracking',
      description: 'Monitor time spent on deals, projects, and tasks. Generate detailed time reports for billing.',
      color: 'orange',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: FiShield,
      title: 'Security & Privacy',
      description: 'Enterprise-grade security with encryption, role-based access control, and GDPR compliance.',
      color: 'gray',
      gradient: 'from-gray-500 to-slate-600'
    }
  ]

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-4">
            <FiZap size={16} />
            <span className="text-sm font-semibold">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our CRM is packed with features designed to help you manage customers, close deals faster, and grow your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-transparent transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
              
              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="text-white" size={28} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-primary-600 font-semibold text-sm hover:underline">
                    Learn more →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="btn btn-primary px-8 py-4 text-lg shadow-xl hover:shadow-2xl">
              Try All Features Free
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 rounded-lg font-semibold hover:border-primary-500 hover:bg-primary-50 transition-all">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features