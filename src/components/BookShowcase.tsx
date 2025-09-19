import React from 'react'

const BookShowcase: React.FC = () => {
  const ageGroups = [
    {
      age: "0-6 months",
      title: "Sensory Exploration",
      accent: "accent",
      books: [
        {
          title: "High Contrast Patterns",
          image: "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400",
          description: "Bold black and white patterns to stimulate developing vision"
        },
        {
          title: "Soft Touch & Feel",
          image: "https://images.pexels.com/photos/1741230/pexels-photo-1741230.jpeg?auto=compress&cs=tinysrgb&w=400",
          description: "Different textures for tactile development"
        }
      ]
    },
    {
      age: "6-12 months",
      title: "Interactive Discovery",
      accent: "primary",
      books: [
        {
          title: "Peek-a-Boo Fun",
          image: "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400",
          description: "Lift-the-flap books for cause and effect learning"
        },
        {
          title: "First Words",
          image: "https://images.pexels.com/photos/1741230/pexels-photo-1741230.jpeg?auto=compress&cs=tinysrgb&w=400",
          description: "Simple vocabulary with colorful illustrations"
        }
      ]
    },
    {
      age: "12-24 months",
      title: "Story Adventures",
      accent: "accent",
      books: [
        {
          title: "Simple Stories",
          image: "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400",
          description: "Short narratives with engaging characters"
        },
        {
          title: "Learning Concepts",
          image: "https://images.pexels.com/photos/1741230/pexels-photo-1741230.jpeg?auto=compress&cs=tinysrgb&w=400",
          description: "Colors, shapes, numbers, and letters"
        }
      ]
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light text-neutral-900 mb-6">
            Books That Grow With Your Baby
          </h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto font-light">
            Each age group receives specially selected books designed for their developmental stage
          </p>
        </div>

        <div className="space-y-20">
          {ageGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="border-t border-neutral-200 pt-16 first:border-t-0 first:pt-0">
              <div className="text-center mb-12">
                <span className={`${
                  group.accent === 'accent' ? 'bg-accent' : 'bg-primary'
                } text-neutral-900 px-4 py-2 text-sm font-medium uppercase tracking-wider`}>
                  {group.age}
                </span>
                <h3 className="text-2xl font-light text-neutral-900 mt-4">
                  {group.title}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {group.books.map((book, bookIndex) => (
                  <div key={bookIndex} className="flex items-start space-x-6 p-6 bg-white border border-neutral-200 hover:border-neutral-300 transition-colors">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="w-20 h-20 object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="text-lg font-medium text-neutral-900 mb-2">
                        {book.title}
                      </h4>
                      <p className="text-neutral-600 text-sm font-light leading-relaxed">
                        {book.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BookShowcase
