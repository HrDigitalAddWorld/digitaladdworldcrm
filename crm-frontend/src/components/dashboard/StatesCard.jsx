const StatsCard = ({ title, value, change, icon: Icon, bgColor, iconColor }) => {
  const isPositive = change?.startsWith('+')

  return (
    <div className="card hover:shadow-md transition-shadow animate-slide-up">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          {change && (
            <p className={`text-sm mt-2 flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              <span className="font-medium">{change}</span>
              <span className="text-gray-500 ml-1">from last month</span>
            </p>
          )}
        </div>
        <div className={`${bgColor} p-4 rounded-xl`}>
          <Icon className={`${iconColor}`} size={32} />
        </div>
      </div>
    </div>
  )
}

export default StatsCard