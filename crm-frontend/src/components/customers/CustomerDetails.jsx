import { useState, useEffect } from 'react'
import { FiX, FiMail, FiPhone, FiBriefcase, FiMapPin, FiCalendar, FiDollarSign, FiEdit2 } from 'react-icons/fi'
import { getCustomer } from '../../services/api'
import { format } from 'date-fns'
import toast from 'react-hot-toast'

const CustomerDetails = ({ customerId, onClose, onEdit }) => {
  const [customer, setCustomer] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (customerId) {
      fetchCustomerDetails()
    }
  }, [customerId])

  const fetchCustomerDetails = async () => {
    try {
      const response = await getCustomer(customerId)
      setCustomer(response.data)
    } catch (error) {
      toast.error('Failed to load customer details')
      onClose()
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
        </div>
      </div>
    )
  }

  if (!customer) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-primary-600 to-purple-600 px-8 py-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
          >
            <FiX size={24} />
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="text-3xl font-bold">
                {customer.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h2 className="text-3xl font-bold">{customer.name}</h2>
              <p className="text-white/80 mt-1">{customer.company || 'No company'}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Status and Value */}
          <div className="flex items-center justify-between">
            <div>
              <span className={`badge ${customer.status === 'active' ? 'badge-success' : 'badge-warning'} text-sm`}>
                {customer.status?.toUpperCase() || 'ACTIVE'}
              </span>
            </div>
            <button
              onClick={() => {
                onClose()
                onEdit(customer)
              }}
              className="btn btn-primary flex items-center space-x-2"
            >
              <FiEdit2 size={16} />
              <span>Edit Customer</span>
            </button>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-6 bg-primary-600 rounded mr-3"></span>
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <FiMail className="text-primary-600" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase mb-1">Email</p>
                  <p className="text-sm text-gray-900 font-medium">{customer.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FiPhone className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase mb-1">Phone</p>
                  <p className="text-sm text-gray-900 font-medium">{customer.phone}</p>
                </div>
              </div>

              {customer.company && (
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <FiBriefcase className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase mb-1">Company</p>
                    <p className="text-sm text-gray-900 font-medium">{customer.company}</p>
                  </div>
                </div>
              )}

              {customer.address && (
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <FiMapPin className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase mb-1">Address</p>
                    <p className="text-sm text-gray-900 font-medium">{customer.address}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Business Information */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-6 bg-green-600 rounded mr-3"></span>
              Business Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <FiDollarSign className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="text-xs text-green-700 font-medium uppercase mb-1">Customer Value</p>
                  <p className="text-2xl text-green-900 font-bold">₹{customer.value?.toLocaleString() || '0'}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <FiCalendar className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-xs text-blue-700 font-medium uppercase mb-1">Customer Since</p>
                  <p className="text-lg text-blue-900 font-semibold">
                    {format(new Date(customer.createdAt), 'MMM dd, yyyy')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          {customer.notes && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-1 h-6 bg-purple-600 rounded mr-3"></span>
                Notes
              </h3>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-gray-700 whitespace-pre-wrap">{customer.notes}</p>
              </div>
            </div>
          )}

          {/* Activity Timeline */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-6 bg-orange-600 rounded mr-3"></span>
              Recent Activity
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <div>
                  <p className="text-sm text-gray-900 font-medium">Customer created</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {format(new Date(customer.createdAt), 'MMM dd, yyyy • hh:mm a')}
                  </p>
                </div>
              </div>
              
              {customer.updatedAt && customer.updatedAt !== customer.createdAt && (
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-900 font-medium">Last updated</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {format(new Date(customer.updatedAt), 'MMM dd, yyyy • hh:mm a')}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">0</p>
              <p className="text-xs text-gray-600 mt-1">Active Deals</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-2xl font-bold text-green-600">0</p>
              <p className="text-xs text-gray-600 mt-1">Completed Tasks</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <p className="text-2xl font-bold text-purple-600">0</p>
              <p className="text-xs text-gray-600 mt-1">Total Interactions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerDetails