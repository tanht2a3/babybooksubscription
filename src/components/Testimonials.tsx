import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Brooklyn, NY',
      text: 'My 8-month-old lights up every time our BabyBooks box arrives! The quality is amazing.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      bgColor: 'bg-secondary/30'
    },
    {
      name: 'Mike & Jenny',
      location: 'Austin, TX',
      text: 'Perfect gift for new parents. The books are educational and beautifully illustrated.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      bgColor: 'bg-teal/20'
    },
    {
      name: 'Priya K.',
      location: 'San Francisco, CA',
      text: 'Love how the books grow with my daughter. Each box is a delightful surprise!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      bgColor: 'bg-accent/20'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-shrimp">
            What parents say
          </h2>
          <div className="flex justify-center items-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-accent fill-current" />
            ))}
            <span className="text-lg font-semibold text-gray-900 ml-4 font-shrimp">4.9/5 rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`card p-8 hover:shadow-medium transition-shadow duration-300 ${testimonial.bgColor}`}
            >
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-shrimp">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900 font-shrimp">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 font-shrimp">{testimonial.location}</p>
                </div>
                <div className="flex ml-auto">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="card inline-block p-6 bg-primary/10">
            <p className="text-lg font-semibold text-gray-900 font-shrimp">Join 10,000+ happy families</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
