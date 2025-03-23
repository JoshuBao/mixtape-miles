import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Us | Mixtape Miles',
  description: 'Get in touch with the Mixtape Miles team to share your story or suggest a journey.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Have a song story to share? Want to suggest a journey? Or just want to say hello?
            We&apos;d love to hear from you!
          </p>
          
          <ContactForm />
          
          <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Other Ways to Connect</h2>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Social Media</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Follow our journey and connect with us on social media.
                </p>
                <div className="space-y-2">
                  <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center">
                    <span className="mr-2">Instagram</span>
                  </a>
                  <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center">
                    <span className="mr-2">Twitter</span>
                  </a>
                  <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center">
                    <span className="mr-2">Spotify</span>
                  </a>
                </div>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Email</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  You can also reach us directly via email.
                </p>
                <a 
                  href="mailto:hello@mixtapemiles.com" 
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                >
                  hello@mixtapemiles.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 