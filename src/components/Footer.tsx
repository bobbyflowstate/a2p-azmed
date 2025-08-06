import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
              Call Us
            </h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                <a href="tel:4802330457" className="hover:text-blue-600">
                  (480) 233-0457
                </a>
              </p>
              <p className="text-gray-600">
                <a href="tel:9282764398" className="hover:text-blue-600">
                  (928) 276-4398
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-gray-600 hover:text-blue-600"
              >
                Home
              </Link>
              <Link
                href="/#after-accident"
                className="block text-gray-600 hover:text-blue-600"
              >
                After an Incident
              </Link>
              <Link
                href="/contact"
                className="block text-gray-600 hover:text-blue-600"
              >
                Contact Form
              </Link>
              <Link
                href="/terms"
                className="block text-gray-600 hover:text-blue-600"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="block text-gray-600 hover:text-blue-600"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Legal Information */}
          <div className="text-center md:text-right">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <p className="text-sm text-gray-500">
              This page is for general informational purposes only
              and does not constitute legal or medical advice.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="text-center text-sm text-gray-500">
            <p className="mb-4">
              By submitting this form, you consent to receive text messages
              related to your inquiry. Reply STOP to opt out at any time.
            </p>
            <p>
              © {new Date().getFullYear()} Arizona Integrated Medical. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}