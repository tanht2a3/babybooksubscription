import React, { useState } from 'react'
import { Star, Filter } from 'lucide-react'

const BooksPage = () => {
  const [selectedAge, setSelectedAge] = useState('all')

  const books = [
    {
      title: 'Goodnight Moon',
      author: 'Margaret Wise Brown',
      age: '0-6',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
      description: 'A soothing bedtime classic that helps babies wind down for sleep.',
      features: ['Caldecott Honor', 'Bedtime routine', 'Rhyming text'],
      bgColor: 'bg-secondary/30'
    },
    {
      title: 'Brown Bear, Brown Bear',
      author: 'Bill Martin Jr.',
      age: '6-12',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      description: 'Colorful animals and repetitive text perfect for early learning.',
      features: ['Color recognition', 'Animal names', 'Repetitive text'],
      bgColor: 'bg-teal/20'
    },
    {
      title: 'The Very Hungry Caterpillar',
      author: 'Eric Carle',
      age: '12-18',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop',
      description: 'Interactive holes and counting concepts for growing minds.',
      features: ['Counting', 'Days of week', 'Interactive holes'],
      bgColor: 'bg-accent/20'
    },
    {
      title: 'Where the Wild Things Are',
      author: 'Maurice Sendak',
      age: '18-24',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
      description: 'Imagination and adventure for developing emotional intelligence.',
      features: ['Caldecott Medal', 'Imagination', 'Emotions'],
      bgColor: 'bg-primary/10'
    },
    {
      title: 'Pat the Bunny',
      author: 'Dorothy Kunhardt',
      age: '0-6',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop',
      description: 'Tactile experiences that engage baby\'s sense of touch.',
      features: ['Touch & feel', 'Sensory play', 'Interactive'],
      bgColor: 'bg-secondary/30'
    },
    {
      title: 'Chicka Chicka Boom Boom',
      author: 'Bill Martin Jr.',
      age: '6-12',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      description: 'Alphabet learning with rhythm and rhyme.',
      features: ['Alphabet', 'Rhyming', 'Colorful art'],
      bgColor: 'bg-teal/20'
    },
    {
      title: 'Dear Zoo',
      author: 'Rod Campbell',
      age: '12-18',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop',
      description: 'Lift-the-flap book about animals and their characteristics.',
      features: ['Lift-the-flap', 'Animals', 'Adjectives'],
      bgColor: 'bg-accent/20'
    },
    {
      title: 'The Runaway Bunny',
      author: 'Margaret Wise Brown',
      age: '18-24',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
      description: 'A story about unconditional love between parent and child.',
      features: ['Parent-child bond', 'Security', 'Classic tale'],
      bgColor: 'bg-primary/10'
    }
  ]

  const filteredBooks = selectedAge === 'all' 
    ? books 
    : books.filter(book => book.age === selectedAge)

  const ageGroups = [
    { value: 'all', label: 'All Ages' },
    { value: '0-6', label: '0-6 months' },
    { value: '6-12', label: '6-12 months' },
    { value: '12-18', label: '12-18 months' },
    { value: '18-24', label: '18-24 months' }
  ]

  return (
    <div className="min-h-screen bg-teal/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-shrimp">
            Our book collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-shrimp">
            Every book is hand-picked by child development experts for maximum learning impact
          </p>
        </div>

        {/* Filter Section */}
        <div className="card p-6 mb-12 bg-accent/10">
          <div className="flex items-center mb-4">
            <Filter className="h-6 w-6 text-primary mr-2" />
            <h3 className="text-lg font-semibold text-gray-900 font-shrimp">Filter by age</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {ageGroups.map((group) => (
              <button
                key={group.value}
                onClick={() => setSelectedAge(group.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors font-shrimp ${
                  selectedAge === group.value
                    ? 'bg-primary text-white'
                    : 'bg-teal/20 text-gray-700 hover:bg-teal/30'
                }`}
              >
                {group.label}
              </button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredBooks.map((book, index) => (
            <div 
              key={index}
              className={`card overflow-hidden hover:shadow-medium transition-shadow duration-300 ${book.bgColor}`}
            >
              <img 
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="inline-flex items-center px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-3 font-shrimp">
                  {book.age} months
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-shrimp">{book.title}</h3>
                <p className="text-sm text-gray-600 mb-3 font-shrimp">by {book.author}</p>
                
                <div className="flex items-center mb-3">
                  {[...Array(book.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-current" />
                  ))}
                </div>
                
                <p className="text-sm text-gray-600 mb-4 leading-relaxed font-shrimp">{book.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {book.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="px-2 py-1 bg-white/60 text-gray-700 text-xs rounded-md font-medium font-shrimp"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="card p-8 inline-block bg-accent/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-shrimp">Ready to start your collection?</h3>
            <p className="text-lg text-gray-600 mb-6 font-shrimp">Get 3-4 expert-curated books delivered monthly</p>
            <button className="btn-primary font-shrimp">
              Start Subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BooksPage
