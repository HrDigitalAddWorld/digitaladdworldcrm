import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const features = [
    { name: 'Lead Management', desc: 'Track and nurture leads' },
    { name: 'Sales Pipeline', desc: 'Visualize your sales process' },
    { name: 'Analytics', desc: 'Data-driven insights' },
    { name: 'Automation', desc: 'Automate repetitive tasks' }
  ]

  const solutions = [
    { name: 'Small Business', desc: 'Perfect for startups' },
    { name: 'Enterprise', desc: 'Scale with confidence' },
    { name: 'Sales Teams', desc: 'Empower your team' },
    { name: 'Marketing', desc: 'Convert more leads' }
  ]

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              Digtial CRM
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Features Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('features')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors">
                <span className="font-medium">Features</span>
                <FiChevronDown size={16} />
              </button>
              
              {activeDropdown === 'features' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-4 animate-slide-down">
                  {features.map((item, idx) => (
                    <Link
                      key={idx}
                      to="/login"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors">
                <span className="font-medium">Solutions</span>
                <FiChevronDown size={16} />
              </button>
              
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-4 animate-slide-down">
                  {solutions.map((item, idx) => (
                    <Link
                      key={idx}
                      to="/login"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/login" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Resources
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Sign In
            </Link>
            <Link to="/register" className="btn btn-primary shadow-lg hover:shadow-xl">
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-slide-down">
          <div className="px-4 py-6 space-y-4">
            <Link to="/login" className="block text-gray-700 hover:text-primary-600 font-medium">
              Features
            </Link>
            <Link to="/login" className="block text-gray-700 hover:text-primary-600 font-medium">
              Solutions
            </Link>
            <Link to="/login" className="block text-gray-700 hover:text-primary-600 font-medium">
              Pricing
            </Link>
            <Link to="/login" className="block text-gray-700 hover:text-primary-600 font-medium">
              Resources
            </Link>
            <div className="pt-4 space-y-3">
              <Link to="/login" className="block w-full text-center py-2 border border-gray-300 rounded-lg font-medium">
                Sign In
              </Link>
              <Link to="/register" className="block w-full text-center btn btn-primary">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar