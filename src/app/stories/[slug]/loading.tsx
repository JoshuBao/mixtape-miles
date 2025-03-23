import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function StoryLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Title placeholder */}
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-6"></div>
          
          {/* Author and date placeholders */}
          <div className="flex items-center mb-8">
            <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse mr-4"></div>
            <div>
              <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
              <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>
          </div>
          
          {/* Journey info placeholder */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg mb-8">
            <div className="h-5 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2 w-3/4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-1/2"></div>
          </div>
          
          {/* Content placeholders */}
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4 w-3/4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4 w-5/6"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-8"></div>
          
          {/* Spotify placeholder */}
          <div className="h-80 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-8"></div>
          
          {/* More text placeholders */}
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4 w-11/12"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4 w-4/5"></div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 