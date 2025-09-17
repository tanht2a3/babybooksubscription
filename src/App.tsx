import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SubscriptionPage from './pages/SubscriptionPage'
import BooksPage from './pages/BooksPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-shrimp">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/books" element={<BooksPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
