'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-16 px-6">
        <div className="text-center">
          <div className="text-6xl font-bold text-red-500 dark:text-red-400 mb-4">😕</div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Something went wrong</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
            We hit a sour note. Our team has been notified and we&apos;re working to fix it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="bg-indigo-600 text-white py-3 px-6 rounded-full hover:bg-indigo-700 transition duration-300"
            >
              Try again
            </button>
            <Link 
              href="/"
              className="bg-white text-indigo-600 border border-indigo-600 py-3 px-6 rounded-full hover:bg-indigo-50 transition duration-300"
            >
              Return Home
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 