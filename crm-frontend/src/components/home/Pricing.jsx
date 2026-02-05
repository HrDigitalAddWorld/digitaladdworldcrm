import { useState } from 'react'
import { FiCheck, FiZap } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams getting started',
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        '5 Users included',
        '1,000 Contacts',
        'Basic CRM features',
        'Email support',
        'Mobile app access',
        'Basic analytics'
      ],
      color: 'blue',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Best for growing businesses',
      monthlyPrice: 79,
      annualPrice: 790,
      features: [
        '25 Users included',
        '10,000 Contacts',
        'Advanced CRM features',
        'Priority support 24/7',
        'Mobile app access',
        'Advanced analytics',
        'Workflow automation',
        'Custom fields',
        'API access'
      ],
      color: 'purple',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        'Unlimited Users',
        'Unlimited Contacts',
        'All Premium features',
        'Dedicated support',
        'Mobile app access',
        'Advanced analytics',
        'Workflow automation',
        'Custom fields',
        'API access',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantee'
      ],
      color: 'green',
      popular: false
    }
  ]

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-4">
            <FiZap size={16} />
            <span className="text-sm font-semibold">Simple Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start with a 14-day free trial. No credit card required. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                !isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 transition-all duration-300 animate-slide-up ${
                plan.popular
                  ? 'border-2 border-primary-500 shadow-2xl scale-105'
                  : 'border border-gray-200 hover:shadow-xl'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">
                    ${isAnnual ? Math.floor(plan.annualPrice / 12) : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-gray-500 mt-2">
                    Billed annually (${plan.annualPrice}/year)
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <FiCheck className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                to="/register"
                className={`block w-full text-center py-4 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Start Free Trial
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ Link */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Need a custom plan for your enterprise?{' '}
            <button className="text-primary-600 font-semibold hover:underline">
              Contact our sales team
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Pricing