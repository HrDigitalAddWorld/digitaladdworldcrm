import { Link } from 'react-router-dom'
import { FiTwitter, FiFacebook, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi'

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '/login' },
      { name: 'Pricing', href: '/login' },
      { name: 'Security', href: '/login' },
      { name: 'Roadmap', href: '/login' },
      { name: 'Changelog', href: '/login' }
    ],
    company: [
      { name: 'About Us', href: '/login' },
      { name: 'Careers', href: '/login' },
      { name: 'Blog', href: '/login' },
      { name: 'Press Kit', href: '/login' },
      { name: 'Contact', href: '/login' }
    ],
    resources: [
      { name: 'Documentation', href: '/login' },
      { name: 'Help Center', href: '/login' },
      { name: 'Webinars', href: '/login' },
      { name: 'Community', href: '/login' },
      { name: 'API Reference', href: '/login' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/login' },
      { name: 'Terms of Service', href: '/login' },
      { name: 'Cookie Policy', href: '/login' },
      { name: 'GDPR', href: '/login' },
      { name: 'Compliance', href: '/login' }
    ]
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold text-white">Digital CRM</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs">
              The modern CRM solution that helps businesses grow faster and build better customer relationships.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: FiTwitter, href: '#' },
                { icon: FiFacebook, href: '#' },
                { icon: FiLinkedin, href: '#' },
                { icon: FiInstagram, href: '#' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white font-semibold mb-2">Subscribe to our newsletter</h3>
              <p className="text-gray-400">Get the latest updates, tips, and offers directly in your inbox.</p>
            </div>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <button className="btn btn-primary px-6 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Digital CRM. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/login" className="hover:text-primary-400 transition-colors">
                Privacy
              </Link>
              <Link to="/login" className="hover:text-primary-400 transition-colors">
                Terms
              </Link>
              <Link to="/login" className="hover:text-primary-400 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer