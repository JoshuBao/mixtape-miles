import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Mixtape Miles</h1>
          
          <div className="prose lg:prose-xl dark:prose-invert">
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
              Mixtape Miles is a blog that combines two of life&apos;s greatest joys: 
              travel and music. Through these journeys, we collect songs and 
              stories from strangers we meet along the way.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-800 dark:text-white">How It Works</h2>
            
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
              For each journey, we pick a theme — a question about music that tells us something 
              about the person answering it. As we travel from place to place, we ask that question 
              to people we encounter: locals, fellow travelers, shopkeepers, artists, and anyone willing to share.
            </p>
            
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
              Each song they share becomes part of a collaborative playlist that tells the 
              story of our journey. By the end of the trip, we&apos;ve created a mixtape that captures 
              not just where we&apos;ve been, but the people we&apos;ve met along the way.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-800 dark:text-white">The Mission</h2>
            
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
              In an age of algorithms and personalized playlists, Mixtape Miles is about the 
              magic of musical discovery through human connection. It&apos;s about stepping outside 
              our comfort zones, both geographically and sonically, to find new songs through 
              the personal stories of others.
            </p>
            
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
              Our journeys take many forms — coastal road trips, train rides across continents, 
              backpacking adventures, or urban explorations. What connects them all is our quest 
              to create a soundtrack that captures the essence of each place through the musical 
              memories of the people we meet.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-800 dark:text-white">Join the Journey</h2>
            
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
              Follow along with our travels, listen to our playlists, and if you see us on the road or in your city, 
              come say hello! We&apos;d love to hear what song reminds you of growing up, or whatever 
              our current theme might be.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Because the best mixtapes are made together.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 