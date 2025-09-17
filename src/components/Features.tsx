import React from 'react'
import { BookOpen, Heart, Truck, Users } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Expert Curation',
      description: 'Child development specialists hand-pick every book for maximum learning impact',
      bgColor: 'bg-primary/20'
    },
    {
      icon: Heart,
      title: 'Age-Appropriate',
      description: 'Books perfectly matched to your baby\'s developmental stage and interests',
      bgColor: 'bg-primary-light/30'
    },
    {
      icon: Truck,
      title: 'Monthly Delivery',
      description: 'Fresh books delivered to your door every month with flexible scheduling',
      bgColor: 'bg-secondary/20'
    },
    {
      icon: Users,
      title: 'Family Bonding',
      description: 'Create precious reading moments and build lifelong learning habits together',
      bgColor: 'bg-accent/20'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4 font-sonder">
            Why parents choose us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-rebeqa">
            We make it easy to give your baby the gift of reading with carefully curated books
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index}
                className={`card p-8 text-center hover:shadow-medium transition-shadow duration-300 ${feature.bgColor}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-dark text-white rounded-full mb-6">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-4 font-rebeqa">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-rebeqa">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <div className="card inline-block p-8 bg-primary/20">
            <h3 className="text-2xl font-bold text-primary-dark mb-4 font-rebeqa">Ready to start reading?</h3>
            <p className="text-lg text-gray-600 mb-6 font-rebeqa">Join thousands of families building better reading habits</p>
            <button className="btn-primary font-rebeqa">
              Start Your Subscription
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
