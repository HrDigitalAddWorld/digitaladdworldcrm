import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const Analytics = () => {
  const leadSourceData = [
    { name: 'Website', value: 35 },
    { name: 'Referral', value: 28 },
    { name: 'LinkedIn', value: 22 },
    { name: 'Cold Call', value: 15 }
  ]

  const monthlyPerformance = [
    { month: 'Jan', customers: 24, leads: 45, tasks: 38 },
    { month: 'Feb', customers: 28, leads: 52, tasks: 42 },
    { month: 'Mar', customers: 32, leads: 48, tasks: 45 },
    { month: 'Apr', customers: 38, leads: 65, tasks: 52 },
    { month: 'May', customers: 42, leads: 58, tasks: 48 },
    { month: 'Jun', customers: 48, leads: 72, tasks: 55 }
  ]

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-1">Insights and performance metrics</p>
        </div>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
          <option>Last 6 Months</option>
          <option>Last Year</option>
          <option>All Time</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card">
          <p className="text-sm text-gray-600 font-medium">Conversion Rate</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">42.5%</p>
          <p className="text-sm text-green-600 mt-2">+8.2% from last period</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 font-medium">Avg Deal Size</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">₹68K</p>
          <p className="text-sm text-green-600 mt-2">+12.5% from last period</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 font-medium">Win Rate</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">38.2%</p>
          <p className="text-sm text-red-600 mt-2">-2.1% from last period</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 font-medium">Sales Cycle</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">24 days</p>
          <p className="text-sm text-green-600 mt-2">-3 days from last period</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Monthly Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#888" style={{ fontSize: '12px' }} />
              <YAxis stroke="#888" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="customers" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              <Bar dataKey="leads" fill="#10b981" radius={[8, 8, 0, 0]} />
              <Bar dataKey="tasks" fill="#f59e0b" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Lead Sources</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={leadSourceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {leadSourceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Performance Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="text-sm font-medium text-blue-900 mb-2">Customer Acquisition</h3>
            <p className="text-2xl font-bold text-blue-600">247</p>
            <p className="text-xs text-blue-700 mt-1">Total customers acquired</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="text-sm font-medium text-green-900 mb-2">Revenue Generated</h3>
            <p className="text-2xl font-bold text-green-600">₹12.5M</p>
            <p className="text-xs text-green-700 mt-1">Total revenue this quarter</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="text-sm font-medium text-purple-900 mb-2">Tasks Completed</h3>
            <p className="text-2xl font-bold text-purple-600">1,284</p>
            <p className="text-xs text-purple-700 mt-1">Tasks completed this month</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Top Performers</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Sales Rep</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Deals Closed</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Win Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">John Doe</td>
                <td className="px-6 py-4 text-sm text-gray-600">42</td>
                <td className="px-6 py-4 text-sm text-gray-600">₹3.2M</td>
                <td className="px-6 py-4"><span className="badge badge-success">45.2%</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Jane Smith</td>
                <td className="px-6 py-4 text-sm text-gray-600">38</td>
                <td className="px-6 py-4 text-sm text-gray-600">₹2.8M</td>
                <td className="px-6 py-4"><span className="badge badge-success">42.1%</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Mike Johnson</td>
                <td className="px-6 py-4 text-sm text-gray-600">35</td>
                <td className="px-6 py-4 text-sm text-gray-600">₹2.5M</td>
                <td className="px-6 py-4"><span className="badge badge-warning">38.7%</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Analytics