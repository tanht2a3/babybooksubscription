import React from 'react'
import { Calendar, Users, Truck, Heart } from 'lucide-react'

const Features: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: "Monthly Delivery",
      description: "Carefully selected books delivered to your door every month, perfectly timed for your baby's development.",
      accent: "accent"
    },
    {
      icon: Users,
      title: "Expert Curation",
      description: "Child development specialists and librarians choose each book to support learning milestones.",
      accent: "primary"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Complimentary shipping on all orders. Cancel or pause your subscription anytime.",
      accent: "accent"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Each package includes reading tips and activities to enhance bonding time with your little one.",
      accent: "primary"
    }
  ]

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light text-neutral-900 mb-6">
            Why Parents Love Us
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light">
            We make it easy to build your baby's first library with books that grow with them
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center border-2 ${
                feature.accent === 'accent' 
                  ? 'border-accent group-hover:bg-accent' 
                  : 'border-primary group-hover:bg-primary'
              } transition-colors duration-300`}>
                <feature.icon className="h-8 w-8 text-neutral-800" />
              </div>
              <h3 className="text-xl font-medium text-neutral-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
