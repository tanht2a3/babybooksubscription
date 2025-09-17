import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-xl font-semibold font-rebeqa">So Keen to Read</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md font-rebeqa">
              Curating the perfect books for your baby's developmental journey. Building lifelong readers, one book at a time.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-300 font-rebeqa">hello@sokeentoread.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-rebeqa">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors font-rebeqa">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/books" className="text-gray-300 hover:text-primary transition-colors font-rebeqa">
                  Books
                </Link>
              </li>
              <li>
                <Link to="/subscription" className="text-gray-300 hover:text-primary transition-colors font-rebeqa">
                  Subscription
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-rebeqa">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors font-rebeqa">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors font-rebeqa">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors font-rebeqa">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors font-rebeqa">
                  Returns
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 font-rebeqa">
            © 2024 So Keen to Read. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
