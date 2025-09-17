import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Gift, Star } from 'lucide-react'

const CallToAction = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-dark to-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sonder">
            Start your reading journey today
          </h2>
          <p className="text-xl mb-8 opacity-90 font-rebeqa">
            Give your baby the foundation for lifelong learning with our expertly curated book collection
          </p>

          <div className="flex items-center justify-center space-x-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-secondary fill-current" />
            ))}
            <span className="text-lg font-semibold ml-4 font-rebeqa">Loved by 10,000+ families</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/subscription"
              className="bg-secondary hover:bg-secondary/90 text-primary-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center transition-colors font-rebeqa"
            >
              Start Monthly Subscription
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link 
              to="/subscription"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center transition-colors font-rebeqa"
            >
              <Gift className="mr-2 h-5 w-5" />
              Give as Gift
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2 text-secondary font-rebeqa">3-4</div>
              <div className="text-white/80 font-rebeqa">Books per box</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-secondary font-rebeqa">$19.99</div>
              <div className="text-white/80 font-rebeqa">Per month</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-secondary font-rebeqa">Free</div>
              <div className="text-white/80 font-rebeqa">Shipping</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
