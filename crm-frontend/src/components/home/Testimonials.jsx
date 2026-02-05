import { FiStar } from 'react-icons/fi'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, Tech Solutions India',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
      content: 'Digtial CRM has transformed how we manage our customer relationships. Our sales have increased by 45% in just 6 months!',
      rating: 5,
      company: 'Tech Solutions'
    },
    {
      name: 'Priya Sharma',
      role: 'Sales Director, Digital Hub',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
      content: 'The automation features saved us countless hours. We can now focus on what matters most - building relationships with our customers.',
      rating: 5,
      company: 'Digital Hub'
    },
    {
      name: 'Amit Patel',
      role: 'Founder, StartupXYZ',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit',
      content: 'Best CRM for startups! Easy to use, affordable, and scales perfectly as we grow. Highly recommended!',
      rating: 5,
      company: 'StartupXYZ'
    },
    {
      name: 'Sneha Reddy',
      role: 'Marketing Head, E-Commerce Plus',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha',
      content: 'The analytics dashboard gives us incredible insights. We make data-driven decisions that have boosted our ROI significantly.',
      rating: 5,
      company: 'E-Commerce Plus'
    },
    {
      name: 'Vikram Singh',
      role: 'Operations Manager, CloudCorp',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram',
      content: 'Integration with our existing tools was seamless. The support team is always helpful and responsive. Five stars!',
      rating: 5,
      company: 'CloudCorp'
    },
    {
      name: 'Neha Gupta',
      role: 'Co-founder, InnovateLabs',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha',
      content: 'We tried 3 other CRMs before finding Digtial CRM. This is the only one that our entire team actually enjoys using!',
      rating: 5,
      company: 'InnovateLabs'
    }
  ]

  return (
    <div className="py-20 bg-gradient-to-br from-primary-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by{' '}
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              10,000+ Businesses
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers have to say about their experience with Digtial CRM
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full bg-gray-200"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
          {['Google', 'Microsoft', 'Amazon', 'Salesforce'].map((company, idx) => (
            <div key={idx} className="text-center">
              <p className="text-2xl font-bold text-gray-400">{company}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials