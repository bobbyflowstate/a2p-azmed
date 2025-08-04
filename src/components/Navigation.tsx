'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-left">
              <h1 className="text-xl font-bold text-gray-900">
                Arizona Integrated Medical
              </h1>
              <p className="text-sm text-gray-600">
                Owned and operated by [Legal Entity LLC]
              </p>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === '/' 
                  ? 'text-blue-600 hover:text-blue-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === '/contact'
                  ? 'text-blue-600 hover:text-blue-700'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}