import { Link } from 'react-router-dom'
import { FiPlay, FiCheckCircle, FiTrendingUp, FiUsers, FiZap } from 'react-icons/fi'

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-purple-50">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6">
              <FiZap size={16} />
              <span className="text-sm font-semibold">Trusted by 10,000+ businesses</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Grow Your Business with{' '}
              <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                Intelligent CRM
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Streamline your sales, automate workflows, and build lasting customer relationships. 
              The all-in-one CRM solution that scales with your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link to="/register" className="btn btn-primary px-8 py-4 text-lg shadow-xl hover:shadow-2xl">
                Start Free Trial →
              </Link>
              <button className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-gray-300 rounded-lg font-semibold hover:border-primary-500 hover:bg-primary-50 transition-all">
                <FiPlay size={20} />
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <FiCheckCircle className="text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiCheckCircle className="text-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiCheckCircle className="text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Floating Cards */}
              <div className="absolute -top-8 -left-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <FiTrendingUp className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Revenue Growth</p>
                    <p className="text-xl font-bold text-gray-900">+42.5%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FiUsers className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">New Customers</p>
                    <p className="text-xl font-bold text-gray-900">+247</p>
                  </div>
                </div>
              </div>

              {/* Main Dashboard Image */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6">
                <div className="space-y-4">
                  {/* Mock Dashboard Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg"></div>
                      <div>
                        <div className="h-3 w-24 bg-gray-200 rounded"></div>
                        <div className="h-2 w-16 bg-gray-100 rounded mt-1"></div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg"></div>
                      <div className="w-8 h-8 bg-gray-100 rounded-lg"></div>
                    </div>
                  </div>

                  {/* Mock Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3">
                        <div className="h-2 w-12 bg-gray-300 rounded mb-2"></div>
                        <div className="h-4 w-16 bg-gray-400 rounded"></div>
                      </div>
                    ))}
                  </div>

                  {/* Mock Chart */}
                  <div className="h-32 bg-gradient-to-t from-primary-50 to-white rounded-lg flex items-end justify-between px-4 pb-4">
                    {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-primary-500 to-primary-400 rounded-t w-8"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '10K+', label: 'Active Users' },
            { number: '99.9%', label: 'Uptime SLA' },
            { number: '50M+', label: 'Leads Managed' },
            { number: '4.9/5', label: 'Customer Rating' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl font-bold text-gray-900">{stat.number}</p>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Hero