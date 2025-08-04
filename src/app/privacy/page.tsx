import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Privacy Policy – Arizona Integrated Medical
        </h1>

        <div className="prose prose-blue max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            We respect your privacy and are committed to protecting your personal information.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                1. Information We Collect
              </h2>
              <div className="text-gray-600 space-y-2">
                <p>
                  We may collect basic contact information (such as name, email, and phone number) if you submit a form on this site.
                </p>
                <p>
                  This site does not collect personal health information.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600">
                Information you provide is used only to respond to your inquiry, confirm appointments, or communicate with you regarding our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                3. Sharing of Information
              </h2>
              <p className="text-gray-600">
                We do not sell or share your information with third parties, except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                4. Cookies and Analytics
              </h2>
              <p className="text-gray-600">
                This website may use basic analytics to improve performance. These do not identify you personally.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                5. Security
              </h2>
              <p className="text-gray-600">
                We take reasonable steps to protect your information. However, no website or email transmission is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                6. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600">
                We may update this policy at any time. Changes will be posted on this page.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-4 border-t">
            <p className="text-gray-600">
              For questions about this Privacy Policy, contact us at{' '}
              <a 
                href="tel:4802330457" 
                className="text-blue-600 hover:text-blue-800"
              >
                (480) 233-0457
              </a>.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              © {new Date().getFullYear()} Arizona Integrated Medical. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}