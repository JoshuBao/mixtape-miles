import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Us | Mixtape Miles',
  description: 'Get in touch with the Mixtape Miles team to share your story or suggest a journey.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-mixtape-paper flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10 text-center">
            <div className="inline-block mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-mixtape-primary to-mixtape-secondary flex items-center justify-center mx-auto">
                <span className="text-mixtape-paper text-3xl">✉️</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-mixtape-text mb-4">Contact Us</h1>
            <p className="text-lg text-mixtape-subtitle">
              Have a song story to share? Want to suggest a journey? Or just want to say hello?
              We&apos;d love to hear from you!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-mixtape-primary to-mixtape-secondary rounded-full mx-auto mt-6"></div>
          </div>
          
          <ContactForm />
          
          <div className="mt-12 border-t border-mixtape-primary/10 pt-8">
            <h2 className="text-2xl font-bold text-mixtape-text mb-6 flex items-center">
              <div className="w-8 h-8 rounded-full bg-mixtape-tertiary/20 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-mixtape-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              Other Ways to Connect
            </h2>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="bg-mixtape-mint p-6 rounded-xl shadow-md border-l-4 border-mixtape-primary">
                <h3 className="text-lg font-medium text-mixtape-text mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-mixtape-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                  Social Media
                </h3>
                <p className="text-mixtape-subtitle mb-4">
                  Follow our journey and connect with us on social media.
                </p>
                <div className="space-y-2">
                  <a href="#" className="text-mixtape-primary hover:text-mixtape-secondary transition-colors duration-300 flex items-center">
                    <span className="mr-2">Instagram</span>
                  </a>
                  <a href="#" className="text-mixtape-primary hover:text-mixtape-secondary transition-colors duration-300 flex items-center">
                    <span className="mr-2">Twitter</span>
                  </a>
                  <a href="#" className="text-mixtape-primary hover:text-mixtape-secondary transition-colors duration-300 flex items-center">
                    <span className="mr-2">Spotify</span>
                  </a>
                </div>
              </div>
              
              <div className="bg-mixtape-coral p-6 rounded-xl shadow-md border-l-4 border-mixtape-secondary">
                <h3 className="text-lg font-medium text-mixtape-text mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-mixtape-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </h3>
                <p className="text-mixtape-subtitle mb-4">
                  You can also reach us directly via email.
                </p>
                <a 
                  href="mailto:hello@mixtapemiles.com" 
                  className="text-mixtape-secondary hover:text-mixtape-primary transition-colors duration-300 font-medium"
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