import { FiEdit2 } from 'react-icons/fi'

const LeadPipeline = ({ leads, onEdit, onStatusChange }) => {
  const stages = [
    { id: 'new', title: 'New Leads', color: 'bg-blue-500' },
    { id: 'contacted', title: 'Contacted', color: 'bg-yellow-500' },
    { id: 'qualified', title: 'Qualified', color: 'bg-purple-500' },
    { id: 'proposal', title: 'Proposal', color: 'bg-orange-500' },
    { id: 'won', title: 'Won', color: 'bg-green-500' }
  ]

  const getLeadsByStage = (stage) => {
    return leads.filter(lead => lead.status === stage)
  }

  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex space-x-4 min-w-max">
        {stages.map((stage) => {
          const stageLeads = getLeadsByStage(stage.id)
          const totalValue = stageLeads.reduce((sum, lead) => sum + (lead.value || 0), 0)

          return (
            <div key={stage.id} className="flex-shrink-0 w-80">
              <div className="card mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${stage.color}`} />
                    <h3 className="font-semibold text-gray-900">{stage.title}</h3>
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                      {stageLeads.length}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Total: ₹{totalValue.toLocaleString()}
                </p>
              </div>

              <div className="space-y-3">
                {stageLeads.length === 0 ? (
                  <div className="card text-center py-8 border-2 border-dashed border-gray-300">
                    <p className="text-sm text-gray-500">No leads in this stage</p>
                  </div>
                ) : (
                  stageLeads.map((lead) => (
                    <div
                      key={lead._id}
                      className="card hover:shadow-lg transition-shadow cursor-pointer group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-semibold text-sm">
                              {lead.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{lead.name}</h4>
                            <p className="text-xs text-gray-500">{lead.company}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => onEdit(lead)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-primary-600"
                        >
                          <FiEdit2 size={16} />
                        </button>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">{lead.email}</p>
                        <p className="text-sm text-gray-600">{lead.phone}</p>
                        <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                          <span className="text-xs text-gray-500">{lead.source || 'Unknown'}</span>
                          <span className="text-sm font-semibold text-gray-900">
                            ₹{lead.value?.toLocaleString() || '0'}
                          </span>
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <select
                          value={lead.status}
                          onChange={(e) => onStatusChange(lead._id, e.target.value)}
                          className="w-full text-xs px-2 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="qualified">Qualified</option>
                          <option value="proposal">Proposal</option>
                          <option value="won">Won</option>
                          <option value="lost">Lost</option>
                        </select>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LeadPipeline