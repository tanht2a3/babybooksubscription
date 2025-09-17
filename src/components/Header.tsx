import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold text-primary-dark font-rebeqa">So Keen to Read</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-primary-dark hover:text-primary font-medium transition-colors font-rebeqa"
            >
              Home
            </Link>
            <Link 
              to="/books" 
              className="text-primary-dark hover:text-primary font-medium transition-colors font-rebeqa"
            >
              Books
            </Link>
            <Link 
              to="/subscription" 
              className="btn-primary font-rebeqa"
            >
              Subscribe
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-primary/20 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-primary-dark hover:text-primary font-medium rounded-lg hover:bg-primary/10 font-rebeqa"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/books"
                className="block px-3 py-2 text-primary-dark hover:text-primary font-medium rounded-lg hover:bg-primary/10 font-rebeqa"
                onClick={() => setIsMenuOpen(false)}
              >
                Books
              </Link>
              <Link
                to="/subscription"
                className="block px-3 py-2 bg-primary text-primary-dark font-medium rounded-lg mt-2 font-rebeqa"
                onClick={() => setIsMenuOpen(false)}
              >
                Subscribe
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
