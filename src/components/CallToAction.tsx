import React from 'react'
import { Check } from 'lucide-react'

const CallToAction: React.FC = () => {
  const plans = [
    {
      name: "Monthly",
      price: "$19.99",
      period: "per month",
      features: [
        "2-3 carefully selected books",
        "Age-appropriate content",
        "Free shipping",
        "Reading guide included",
        "Cancel anytime"
      ]
    },
    {
      name: "3-Month Gift",
      price: "$54.99",
      period: "one time",
      popular: true,
      features: [
        "6-9 books total",
        "Perfect baby shower gift",
        "Beautiful gift packaging",
        "Personal message card",
        "Free shipping"
      ]
    },
    {
      name: "6-Month Gift",
      price: "$99.99",
      period: "one time",
      features: [
        "12-18 books total",
        "Complete starter library",
        "Premium gift box",
        "Milestone tracking cards",
        "Free shipping"
      ]
    }
  ]

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light text-neutral-900 mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light">
            Start building your baby's library today with our flexible subscription options
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white border-2 p-8 ${plan.popular ? 'border-accent' : 'border-neutral-200'}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-neutral-900 px-4 py-1 text-xs font-medium uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-light text-neutral-900 mb-4">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-light text-neutral-900">{plan.price}</span>
                  <span className="text-neutral-600 ml-2 text-sm">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className={`w-4 h-4 mt-1 flex-shrink-0 flex items-center justify-center ${
                      plan.popular ? 'bg-accent' : 'bg-primary'
                    }`}>
                      <Check className="h-3 w-3 text-neutral-900" />
                    </div>
                    <span className="text-neutral-700 text-sm font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 font-medium transition-colors ${
                plan.popular 
                  ? 'bg-teal text-white hover:opacity-90' 
                  : 'border-2 border-neutral-300 text-neutral-900 hover:border-primary hover:bg-primary'
              }`}>
                {plan.name.includes('Gift') ? 'Give as Gift' : 'Start Subscription'}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-neutral-600 mb-4 font-light">
            Questions? We're here to help!
          </p>
          <button className="text-neutral-900 font-medium hover:text-neutral-600 transition-colors border-b-2 border-accent hover:border-primary">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
