import React, { useState } from 'react'
import { Check, Gift, ArrowRight } from 'lucide-react'

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly')
  const [isGift, setIsGift] = useState(false)

  const plans = [
    {
      id: 'monthly',
      name: 'Monthly',
      price: '$24.99',
      description: 'Perfect for trying us out',
      features: ['3-4 books per box', 'Free shipping', 'Cancel anytime', 'Expert curation'],
      popular: false,
      bgColor: 'bg-secondary/30'
    },
    {
      id: '3month',
      name: '3 Months',
      price: '$69.99',
      originalPrice: '$74.97',
      description: 'Most popular choice',
      features: ['3-4 books per box', 'Free shipping', 'Save $5', 'Expert curation', 'Bonus activity guide'],
      popular: true,
      bgColor: 'bg-primary/10'
    },
    {
      id: '6month',
      name: '6 Months',
      price: '$134.99',
      originalPrice: '$149.94',
      description: 'Best value for families',
      features: ['3-4 books per box', 'Free shipping', 'Save $15', 'Expert curation', 'Bonus activity guide', 'Exclusive tote bag'],
      popular: false,
      bgColor: 'bg-teal/20'
    }
  ]

  return (
    <div className="min-h-screen bg-teal/5 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-shrimp">
            Choose your plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-shrimp">
            Start your baby's reading journey with expert-curated books
          </p>
        </div>

        {/* Gift Toggle */}
        <div className="flex justify-center mb-12">
          <div className="card p-2">
            <div className="flex rounded-lg bg-teal/20">
              <button
                onClick={() => setIsGift(false)}
                className={`px-6 py-3 font-medium rounded-lg transition-colors font-shrimp ${
                  !isGift ? 'bg-white text-gray-900 shadow-soft' : 'text-gray-600'
                }`}
              >
                For my baby
              </button>
              <button
                onClick={() => setIsGift(true)}
                className={`px-6 py-3 font-medium rounded-lg transition-colors inline-flex items-center font-shrimp ${
                  isGift ? 'bg-white text-gray-900 shadow-soft' : 'text-gray-600'
                }`}
              >
                <Gift className="mr-2 h-5 w-5" />
                As a gift
              </button>
            </div>
          </div>
        </div>

        {/* Subscription Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`card p-8 cursor-pointer transition-all duration-200 ${plan.bgColor} ${
                selectedPlan === plan.id ? 'ring-2 ring-primary shadow-large' : 'hover:shadow-medium'
              } ${plan.popular ? 'relative' : ''}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-2 rounded-lg font-medium text-sm font-shrimp">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-shrimp">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-gray-900 font-shrimp">{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-lg text-gray-500 line-through ml-2 font-shrimp">{plan.originalPrice}</span>
                  )}
                </div>
                <p className="text-gray-600 font-shrimp">{plan.description}</p>
              </div>
              
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-shrimp">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Age Selection */}
        <div className="card p-8 mb-8 bg-accent/10">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 font-shrimp">Select your baby's age</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['0-6 months', '6-12 months', '12-18 months', '18-24 months'].map((age) => (
              <button
                key={age}
                className="p-4 text-center border-2 border-primary/20 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors font-medium font-shrimp"
              >
                {age}
              </button>
            ))}
          </div>
        </div>

        {/* Checkout Button */}
        <div className="text-center">
          <button className="btn-primary text-lg px-12 py-4 inline-flex items-center font-shrimp">
            {isGift ? 'Purchase Gift' : 'Start Subscription'}
            <ArrowRight className="ml-3 h-6 w-6" />
          </button>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-secondary/40 rounded-lg p-4">
              <p className="font-medium text-gray-900 font-shrimp">30-Day Guarantee</p>
            </div>
            <div className="bg-teal/30 rounded-lg p-4">
              <p className="font-medium text-gray-900 font-shrimp">Secure Checkout</p>
            </div>
            <div className="bg-accent/30 rounded-lg p-4">
              <p className="font-medium text-gray-900 font-shrimp">Cancel Anytime</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionPage
