import { useState, useEffect } from 'react'
import { FiPlus } from 'react-icons/fi'
import LeadList from '../components/leads/LeadList'
import LeadForm from '../components/leads/LeadForm'
import LeadPipeline from '../components/leads/LeadPipeline'
import { getLeads } from '../services/api'
import toast from 'react-hot-toast'

const Leads = () => {
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [selectedLead, setSelectedLead] = useState(null)
  const [viewMode, setViewMode] = useState('list')

  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {
    try {
      const response = await getLeads()
      setLeads(response.data)
    } catch (error) {
      toast.error('Failed to load leads')
      setLeads([
        { _id: '1', name: 'Digital Marketing Pro', email: 'contact@digipro.com', phone: '+91-9876543210', company: 'DigiPro', status: 'new', value: 45000, source: 'Website' },
        { _id: '2', name: 'Cloud Solutions Inc', email: 'info@cloudsol.com', phone: '+91-9876543211', company: 'CloudSol', status: 'qualified', value: 80000, source: 'Referral' },
        { _id: '3', name: 'Mobile App Developers', email: 'hello@mobileapp.com', phone: '+91-9876543212', company: 'MobileDev', status: 'contacted', value: 60000, source: 'LinkedIn' }
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (lead) => {
    setSelectedLead(lead)
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      try {
        setLeads(leads.filter(l => l._id !== id))
        toast.success('Lead deleted successfully')
      } catch (error) {
        toast.error('Failed to delete lead')
      }
    }
  }

  const handleSubmit = (lead) => {
    if (selectedLead) {
      setLeads(leads.map(l => l._id === selectedLead._id ? lead : l))
      toast.success('Lead updated successfully')
    } else {
      setLeads([{ ...lead, _id: Date.now().toString() }, ...leads])
      toast.success('Lead added successfully')
    }
    setShowForm(false)
    setSelectedLead(null)
  }

  const handleStatusChange = (leadId, newStatus) => {
    setLeads(leads.map(l => l._id === leadId ? { ...l, status: newStatus } : l))
    toast.success('Lead status updated')
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Leads</h1>
          <p className="text-gray-600 mt-1">Track and manage your sales pipeline</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-white rounded-lg border border-gray-300 p-1 flex">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'list'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              List View
            </button>
            <button
              onClick={() => setViewMode('pipeline')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'pipeline'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Pipeline View
            </button>
          </div>
          <button
            onClick={() => {
              setSelectedLead(null)
              setShowForm(true)
            }}
            className="btn btn-primary flex items-center space-x-2"
          >
            <FiPlus size={20} />
            <span>Add Lead</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card">
          <p className="text-sm text-gray-600 font-medium">New Leads</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {leads.filter(l => l.status === 'new').length}
          </p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 font-medium">Qualified</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {leads.filter(l => l.status === 'qualified').length}
          </p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 font-medium">In Progress</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {leads.filter(l => l.status === 'contacted' || l.status === 'proposal').length}
          </p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 font-medium">Total Value</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            ₹{leads.reduce((sum, l) => sum + (l.value || 0), 0).toLocaleString()}
          </p>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      ) : viewMode === 'list' ? (
        <LeadList
          leads={leads}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
        />
      ) : (
        <LeadPipeline
          leads={leads}
          onEdit={handleEdit}
          onStatusChange={handleStatusChange}
        />
      )}

      {showForm && (
        <LeadForm
          lead={selectedLead}
          onClose={() => {
            setShowForm(false)
            setSelectedLead(null)
          }}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  )
}

export default Leads