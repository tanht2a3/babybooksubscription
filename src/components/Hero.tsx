import React from 'react'
import { Star, Gift, BookOpen } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-light text-neutral-900 mb-8 leading-tight tracking-tight">
              Curated Books for Your Little Reader
            </h1>
            <p className="text-xl text-neutral-700 mb-12 leading-relaxed font-light">
              Monthly delivery of age-appropriate books designed to spark curiosity and build early literacy skills for babies 0-24 months.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-teal text-white px-8 py-4 text-lg font-medium hover:opacity-90 transition-opacity">
                Start Subscription
              </button>
              <button className="border-2 border-primary text-neutral-900 px-8 py-4 text-lg font-medium hover:bg-primary transition-colors bg-white">
                Give as Gift
              </button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-neutral-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Expert Curated</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Perfect Gift</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Age Appropriate</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white border border-neutral-200 p-8">
              <img 
                src="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Baby reading colorful book"
                className="w-full h-80 object-cover"
              />
              <div className="mt-6 text-center">
                <h3 className="text-lg font-medium text-neutral-900">This Month's Selection</h3>
                <p className="text-neutral-600 mt-1">Interactive touch & feel books</p>
              </div>
            </div>
            
            <div className="absolute -top-3 -right-3 bg-accent text-neutral-900 px-4 py-2 text-sm font-medium">
              0-6 months
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
