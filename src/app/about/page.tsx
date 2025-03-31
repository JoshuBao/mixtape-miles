import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-mixtape-paper">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <div className="inline-block mb-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-mixtape-primary to-mixtape-secondary flex items-center justify-center mx-auto">
                <span className="text-mixtape-paper text-4xl">🎵</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-mixtape-text">About Mixtape Miles</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-mixtape-primary to-mixtape-secondary rounded-full mx-auto"></div>
          </div>
          
          <div className="prose lg:prose-xl mx-auto">
            <div className="bg-mixtape-mint p-6 rounded-xl shadow-md mb-10">
              <p className="mb-0 text-lg text-mixtape-text font-medium">
                Mixtape Miles is a blog that combines two of life&apos;s greatest joys: 
                travel and music. Through these journeys, we collect songs and 
                stories from strangers we meet along the way.
              </p>
            </div>
            
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-mixtape-primary/20 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mixtape-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-mixtape-text">How It Works</h2>
            </div>
            
            <p className="mb-6 text-lg text-mixtape-subtitle">
              For each journey, we pick a theme — a question about music that tells us something 
              about the person answering it. As we travel from place to place, we ask that question 
              to people we encounter: locals, fellow travelers, shopkeepers, artists, and anyone willing to share.
            </p>
            
            <p className="mb-10 text-lg text-mixtape-subtitle">
              Each song they share becomes part of a collaborative playlist that tells the 
              story of our journey. By the end of the trip, we&apos;ve created a mixtape that captures 
              not just where we&apos;ve been, but the people we&apos;ve met along the way.
            </p>
            
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-mixtape-secondary/20 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mixtape-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-mixtape-text">The Mission</h2>
            </div>
            
            <div className="border-l-4 border-mixtape-secondary pl-4 mb-6">
              <p className="text-lg text-mixtape-subtitle">
                In an age of algorithms and personalized playlists, Mixtape Miles is about the 
                magic of musical discovery through human connection. It&apos;s about stepping outside 
                our comfort zones, both geographically and sonically, to find new songs through 
                the personal stories of others.
              </p>
            </div>
            
            <p className="mb-10 text-lg text-mixtape-subtitle">
              Our journeys take many forms — coastal road trips, train rides across continents, 
              backpacking adventures, or urban explorations. What connects them all is our quest 
              to create a soundtrack that captures the essence of each place through the musical 
              memories of the people we meet.
            </p>
            
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-mixtape-tertiary/20 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mixtape-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-mixtape-text">Join the Journey</h2>
            </div>
            
            <p className="mb-6 text-lg text-mixtape-subtitle">
              Follow along with our travels, listen to our playlists, and if you see us on the road or in your city, 
              come say hello! We&apos;d love to hear what song reminds you of growing up, or whatever 
              our current theme might be.
            </p>
            
            <div className="bg-gradient-to-r from-mixtape-primary to-mixtape-secondary p-6 rounded-xl shadow-md text-center">
              <p className="text-xl text-mixtape-paper font-bold mb-0">
                Because the best mixtapes are made together.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 