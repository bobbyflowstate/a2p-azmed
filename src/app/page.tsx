import Navigation from '@/components/Navigation';
import Locations from '@/components/Locations';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to Arizona Integrated Medical
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Providing multidisciplinary care including orthopedics, pain management,
            rehabilitation, and chiropractic services at our Phoenix, Litchfield Park,
            and Yuma locations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">About Us</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Arizona Integrated Medical is owned and operated by [Legal Entity LLC].
            Our team's focus is to help patients recover mobility, reduce pain, and
            return to daily life with personalized treatment. We take pride in providing
            comprehensive care that addresses your specific needs.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Services</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-center text-gray-700">
                <span className="mr-2">•</span> Orthopedics
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-2">•</span> Pain Management
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-2">•</span> Rehabilitation
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-2">•</span> Chiropractic Services
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <Locations />

      {/* Accident Guide Section */}
      <section id="after-accident" className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What to Do After an Accident
          </h2>
          <div className="space-y-4">
            {[
              'Make sure everyone is safe',
              'Document the scene',
              'Exchange information',
              'Report the accident',
              'Get checked out',
            ].map((step, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <span className="text-blue-600 font-semibold">{index + 1}.</span>
                <span className="text-gray-700">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}