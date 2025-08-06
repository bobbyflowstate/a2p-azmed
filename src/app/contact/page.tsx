import ContactForm from '@/components/ContactForm';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Main Headline Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Arizona Integrated Medical
          </h1>
          <p className="text-xl text-gray-600">
            Leave your phone number and we'll contact you to discuss your needs and schedule an appointment.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-12 bg-gray-50">
        <ContactForm />
      </section>

      <Footer />
    </main>
  );
}