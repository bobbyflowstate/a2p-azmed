import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Terms of Service – Arizona Integrated Medical
        </h1>

        <div className="prose prose-blue max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Welcome to Arizona Integrated Medical.
            By using this website, you agree to the following terms:
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                1. Informational Use Only
              </h2>
              <p className="text-gray-600">
                The content on this site is for general informational purposes only and does not constitute medical or legal advice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                2. No Patient Relationship
              </h2>
              <p className="text-gray-600">
                Contacting us through this website or by phone does not create a patient-provider relationship until an appointment is confirmed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                3. Accuracy of Information
              </h2>
              <p className="text-gray-600">
                While we strive to keep information up-to-date, we make no guarantees regarding completeness or accuracy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                4. Limitation of Liability
              </h2>
              <p className="text-gray-600">
                Arizona Integrated Medical, its staff, and affiliates are not liable for any decisions made based on the information provided on this site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                5. External Links
              </h2>
              <p className="text-gray-600">
                This website may link to other sites. We are not responsible for the content or privacy practices of those external sites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                6. Changes to These Terms
              </h2>
              <p className="text-gray-600">
                We may update these Terms of Service at any time. Continued use of this site means you agree to the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                7. SMS Messaging
              </h2>
              <p className="text-gray-600">
                By providing your phone number, you consent to receive appointment-related SMS messages from Arizona Integrated Medical. Message and data rates may apply. Reply STOP to opt out at any time, or HELP for assistance. Carriers are not liable for delayed or undelivered messages.
              </p>
            </section>
          </div>

          <p className="text-sm text-gray-500 mt-12 pt-4 border-t">
            © {new Date().getFullYear()} Arizona Integrated Medical. All rights reserved.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}