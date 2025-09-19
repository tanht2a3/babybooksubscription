import React, { useState } from 'react'
import { Menu, X, ShoppingCart } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.chatandbuild.com/users/68405c61ef18dea654a44f80/illustration-1758263779157-285591694-1758263779157-934693464.png" 
              alt="So Keen to Read Logo" 
              className="h-8 w-8 object-contain"
            />
            <h1 className="text-2xl text-neutral-900 tracking-tight">
              <span className="font-parkinsans font-bold">So Keen</span>
              <span className="font-poppins font-light ml-1">to</span>
              <span className="font-poppins font-bold ml-1">Read</span>
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-12">
            <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium">How it Works</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium">Books</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium">Pricing</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium">Gift</a>
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <button className="text-neutral-600 hover:text-neutral-900 transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <button className="bg-teal text-white px-6 py-2 text-sm font-medium hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-neutral-100">
              <a href="#" className="block px-3 py-2 text-neutral-600 hover:text-neutral-900 transition-colors">How it Works</a>
              <a href="#" className="block px-3 py-2 text-neutral-600 hover:text-neutral-900 transition-colors">Books</a>
              <a href="#" className="block px-3 py-2 text-neutral-600 hover:text-neutral-900 transition-colors">Pricing</a>
              <a href="#" className="block px-3 py-2 text-neutral-600 hover:text-neutral-900 transition-colors">Gift</a>
              <button className="w-full mt-2 bg-teal text-white px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
