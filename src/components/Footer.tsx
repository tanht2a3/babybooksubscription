import React from 'react'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-neutral-200 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl text-neutral-900 tracking-tight mb-6">
              <span className="font-parkinsans font-bold">So Keen</span>
              <span className="font-poppins font-light ml-1">to</span>
              <span className="font-poppins font-bold ml-1">Read</span>
            </h3>
            <p className="text-neutral-700 mb-8 font-light leading-relaxed">
              Building little libraries, one book at a time. Curated subscriptions for babies 0-24 months.
            </p>
            <div className="flex space-x-6">
              <div className="w-8 h-8 bg-accent flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Facebook className="h-4 w-4 text-neutral-900" />
              </div>
              <div className="w-8 h-8 bg-primary flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                <Instagram className="h-4 w-4 text-neutral-900" />
              </div>
              <div className="w-8 h-8 bg-accent flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Twitter className="h-4 w-4 text-neutral-900" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-neutral-900 mb-6 border-b-2 border-primary pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors font-light">How it Works</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors font-light">Our Books</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors font-light">Pricing</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors font-light">Gift Options</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-neutral-900 mb-6 border-b-2 border-accent pb-2 inline-block">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors font-light">FAQ</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors font-light">Contact Us</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors font-light">Shipping Info</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors font-light">Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-neutral-900 mb-6 border-b-2 border-primary pb-2 inline-block">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent flex items-center justify-center">
                  <Mail className="h-3 w-3 text-neutral-900" />
                </div>
                <span className="text-neutral-600 font-light">hello@sokeentoread.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary flex items-center justify-center">
                  <Phone className="h-3 w-3 text-neutral-900" />
                </div>
                <span className="text-neutral-600 font-light">1-800-READ-BABY</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent flex items-center justify-center">
                  <MapPin className="h-3 w-3 text-neutral-900" />
                </div>
                <span className="text-neutral-600 font-light">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-16 pt-8 text-center">
          <p className="text-neutral-600 font-light text-sm">
            © 2024 So Keen to Read. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
