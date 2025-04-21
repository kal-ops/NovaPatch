import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-novaskin-cream">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-2">
          <FaStar className="text-novaskin-yellow text-2xl" />
          <span className="font-bold text-xl">NOVASKIN</span>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/patches" className="hover:text-gray-600">Patches</Link>
          <Link href="/supernova" className="hover:text-gray-600">Supernova</Link>
          <Link href="/faq" className="hover:text-gray-600">FAQ</Link>
          <Link href="/cart" className="bg-black text-white px-4 py-2 rounded-full">
            Cart (0)
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-16 relative">
        <div className="max-w-6xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute top-20 left-8 w-4 h-4 rounded-full bg-emerald-400"></div>
          <div className="absolute top-40 right-8 w-4 h-4 rounded-full bg-pink-400"></div>
          
          {/* Content */}
          <div className="flex items-center justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full mb-8">
                <FaStar className="text-novaskin-yellow" />
                <span>Feel Your Best On-The-Go</span>
              </div>
              
              <h1 className="text-6xl font-bold mb-6">
                Pocket-Sized <span className="text-novaskin-yellow">Wellness</span><br />
                Patches!
              </h1>
              
              <p className="text-gray-700 text-xl mb-8">
                Transform your daily wellness routine with our innovative skin-administered patches. 
                Convenient, effective, and perfect for your busy lifestyle.
              </p>
              
              <div className="flex gap-4">
                <Link 
                  href="/shop" 
                  className="bg-novaskin-yellow px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Shop Now
                </Link>
                <Link 
                  href="/learn-more" 
                  className="border-2 border-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors flex items-center gap-2"
                >
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="w-96 h-96 bg-gray-200 rounded-full opacity-20"></div>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <div className="w-64 h-80 bg-novaskin-yellow rounded-3xl relative">
                  <FaStar className="absolute text-4xl text-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-pink-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 