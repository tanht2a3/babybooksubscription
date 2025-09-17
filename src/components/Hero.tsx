import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Gift } from 'lucide-react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary/30 to-primary-light/50 section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-secondary/20 text-primary-dark rounded-full text-sm font-medium mb-6 font-rebeqa">
              Ages 0-2 Years
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-primary-dark mb-6 leading-tight font-sonder">
              Books that grow with your baby
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed font-rebeqa">
              Curated monthly book boxes for babies & toddlers. Expert-selected, parent-approved, delivered to your door.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                to="/subscription"
                className="btn-primary inline-flex items-center justify-center font-rebeqa"
              >
                Start Subscription
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link 
                to="/subscription"
                className="btn-accent inline-flex items-center justify-center font-rebeqa"
              >
                <Gift className="mr-2 h-5 w-5" />
                Give as Gift
              </Link>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-secondary fill-current" />
                ))}
              </div>
              <span className="text-gray-600 font-medium font-rebeqa">10,000+ happy families</span>
            </div>
          </div>

          <div className="relative">
            <div className="card p-8">
              <img 
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=600&fit=crop"
                alt="Baby reading colorful book"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-lg font-medium shadow-medium font-rebeqa">
                New books monthly!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
