import { FiUserPlus, FiUpload, FiSettings, FiTrendingUp } from 'react-icons/fi'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: FiUserPlus,
      title: 'Sign Up in Seconds',
      description: 'Create your account and get started instantly. No credit card required for the free trial.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      icon: FiUpload,
      title: 'Import Your Data',
      description: 'Easily migrate contacts, leads, and deals from spreadsheets or other CRMs with our smart import tool.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      icon: FiSettings,
      title: 'Customize Your Workflow',
      description: 'Set up your sales pipeline, create custom fields, and configure automation rules to match your process.',
      color: 'from-orange-500 to-red-500'
    },
    {
      number: '04',
      icon: FiTrendingUp,
      title: 'Start Growing',
      description: 'Track leads, close deals, and watch your business grow with data-driven insights and automation.',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Started in{' '}
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Setting up your CRM is quick and easy. Follow these steps to start managing your customers better.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary-200">
                  {/* Number Badge */}
                  <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 mt-4`}>
                    <step.icon className="text-white" size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (Desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-gray-300">
                      <path d="M8 16H24M24 16L16 8M24 16L16 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="btn btn-primary px-8 py-4 text-lg shadow-xl hover:shadow-2xl">
            Start Your Free Trial →
          </button>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks