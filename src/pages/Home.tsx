import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import BookShowcase from '../components/BookShowcase'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <BookShowcase />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home
