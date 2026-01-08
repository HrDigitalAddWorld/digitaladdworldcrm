import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const RevenueChart = () => {
  const data = [
    { month: 'Jan', revenue: 35000, leads: 45 },
    { month: 'Feb', revenue: 42000, leads: 52 },
    { month: 'Mar', revenue: 38000, leads: 48 },
    { month: 'Apr', revenue: 51000, leads: 65 },
    { month: 'May', revenue: 48000, leads: 58 },
    { month: 'Jun', revenue: 62000, leads: 72 },
    { month: 'Jul', revenue: 55000, leads: 68 },
    { month: 'Aug', revenue: 67000, leads: 78 },
    { month: 'Sep', revenue: 72000, leads: 85 },
    { month: 'Oct', revenue: 68000, leads: 80 },
    { month: 'Nov', revenue: 78000, leads: 92 },
    { month: 'Dec', revenue: 85000, leads: 98 }
  ]

  return (
    <div className="card h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Revenue & Leads</h2>
          <p className="text-sm text-gray-600 mt-1">Monthly performance overview</p>
        </div>
        <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500">
          <option>This Year</option>
          <option>Last Year</option>
          <option>Last 6 Months</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="month" 
            stroke="#888"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#888"
            style={{ fontSize: '12px' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#3b82f6" 
            strokeWidth={3}
            dot={{ fill: '#3b82f6', r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="leads" 
            stroke="#10b981" 
            strokeWidth={3}
            dot={{ fill: '#10b981', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RevenueChart