import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-16 px-6">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
            Looks like we&apos;ve hit a wrong note. The page you&apos;re looking for might have been moved or doesn&apos;t exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="bg-indigo-600 text-white py-3 px-6 rounded-full hover:bg-indigo-700 transition duration-300"
            >
              Return Home
            </Link>
            <Link 
              href="/stories"
              className="bg-white text-indigo-600 border border-indigo-600 py-3 px-6 rounded-full hover:bg-indigo-50 transition duration-300"
            >
              Explore Stories
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 