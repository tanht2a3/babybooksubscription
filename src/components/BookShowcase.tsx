import React from 'react'

const BookShowcase = () => {
  const books = [
    {
      title: 'Goodnight Moon',
      author: 'Margaret Wise Brown',
      age: '0-6 months',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
      description: 'Classic bedtime story with soothing rhythm',
      bgColor: 'bg-secondary/30'
    },
    {
      title: 'Brown Bear, Brown Bear',
      author: 'Bill Martin Jr.',
      age: '6-12 months',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      description: 'Colorful animals & repetitive text for learning',
      bgColor: 'bg-teal/20'
    },
    {
      title: 'The Very Hungry Caterpillar',
      author: 'Eric Carle',
      age: '12-18 months',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop',
      description: 'Interactive holes & counting concepts',
      bgColor: 'bg-accent/20'
    },
    {
      title: 'Where the Wild Things Are',
      author: 'Maurice Sendak',
      age: '18-24 months',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
      description: 'Imagination & adventure for growing minds',
      bgColor: 'bg-primary/10'
    }
  ]

  return (
    <section className="section-padding bg-teal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-shrimp">
            Books by age group
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-shrimp">
            Every book is carefully selected to match your baby's developmental milestones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div 
              key={index}
              className="card overflow-hidden hover:shadow-medium transition-shadow duration-300"
            >
              <img 
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className={`inline-flex items-center px-3 py-1 ${book.bgColor} text-primary rounded-full text-sm font-medium mb-3 font-shrimp`}>
                  {book.age}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-shrimp">{book.title}</h3>
                <p className="text-sm text-gray-600 mb-3 font-shrimp">by {book.author}</p>
                <p className="text-gray-600 font-shrimp">{book.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="card inline-block p-6 bg-accent/20">
            <p className="text-lg font-semibold text-gray-900 font-shrimp">3-4 books per box • New selections monthly</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookShowcase
