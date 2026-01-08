import { useState, useEffect } from 'react'
import { FiPlus, FiSearch, FiFilter } from 'react-icons/fi'
import CustomerList from '../components/customers/CustomerList'
import CustomerForm from '../components/customers/CustomerForm'
import { getCustomers } from '../services/api'
import toast from 'react-hot-toast'

const Customers = () => {
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchCustomers()
  }, [])

  const fetchCustomers = async () => {
    try {
      const response = await getCustomers()
      setCustomers(response.data)
    } catch (error) {
      toast.error('Failed to load customers')
      setCustomers([
        { _id: '1', name: 'Acme Corporation', email: 'contact@acme.com', phone: '+91-9876543210', company: 'Acme Corp', status: 'active', value: 50000 },
        { _id: '2', name: 'Tech Solutions Ltd', email: 'info@techsol.com', phone: '+91-9876543211', company: 'Tech Solutions', status: 'active', value: 75000 },
        { _id: '3', name: 'Global Industries', email: 'hello@global.com', phone: '+91-9876543212', company: 'Global Inc', status: 'inactive', value: 30000 }
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (customer) => {
    setSelectedCustomer(customer)
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      try {
        setCustomers(customers.filter(c => c._id !== id))
        toast.success('Customer deleted successfully')
      } catch (error) {
        toast.error('Failed to delete customer')
      }
    }
  }

  const handleSubmit = (customer) => {
    if (selectedCustomer) {
      setCustomers(customers.map(c => c._id === selectedCustomer._id ? customer : c))
      toast.success('Customer updated successfully')
    } else {
      setCustomers([{ ...customer, _id: Date.now().toString() }, ...customers])
      toast.success('Customer added successfully')
    }
    setShowForm(false)
    setSelectedCustomer(null)
  }

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.company?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
          <p className="text-gray-600 mt-1">Manage your customer relationships</p>
        </div>
        <button
          onClick={() => {
            setSelectedCustomer(null)
            setShowForm(true)
          }}
          className="btn btn-primary flex items-center space-x-2"
        >
          <FiPlus size={20} />
          <span>Add Customer</span>
        </button>
      </div>

      <div className="card">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input pl-10 w-full"
            />
          </div>
          <button className="btn btn-secondary flex items-center space-x-2">
            <FiFilter size={18} />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      ) : (
        <CustomerList
          customers={filteredCustomers}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}

      {showForm && (
        <CustomerForm
          customer={selectedCustomer}
          onClose={() => {
            setShowForm(false)
            setSelectedCustomer(null)
          }}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  )
}

export default Customers