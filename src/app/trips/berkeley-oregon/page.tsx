import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoryCard from '@/components/stories/StoryCard';
import { getStoriesByJourney } from '@/data/stories';

export const metadata = {
  title: 'Berkeley-Oregon Road Trip | Mixtape Miles',
  description: 'Explore the stories and songs collected during our Berkeley to Oregon road trip in March 2025.'
};

export default async function BerkeleyOregonPage() {
  // We're not using params or searchParams in this page
  const berekeleyOregonStories = getStoriesByJourney('Berkeley-Oregon Road Trip');
  
  return (
    <div className="min-h-screen bg-mixtape-paper">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link 
            href="/trips" 
            className="text-mixtape-primary hover:text-mixtape-secondary transition-colors duration-300 mb-8 inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Back to All Journeys
          </Link>
          
          <div className="bg-gradient-primary rounded-xl p-8 mb-12 text-white shadow-lg">
            <div className="absolute top-0 right-0 bg-gradient-secondary-to-tertiary text-mixtape-paper px-3 py-1 rounded-bl-lg text-sm font-bold m-4">
              ACTIVE
            </div>
            <h1 className="text-4xl font-bold mb-4 drop-shadow-md">Berkeley-Oregon Road Trip</h1>
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <p className="text-lg mb-2 text-mixtape-paper/90">March 22, 2025</p>
                <p className="text-xl font-semibold text-mixtape-paper">Theme: What is a song that reminds you of growing up?</p>
              </div>
              <div className="mt-4 md:mt-0 bg-mixtape-paper text-mixtape-primary py-2 px-6 rounded-full font-bold shadow-md flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-mixtape-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                {berekeleyOregonStories.length} Stories Collected
              </div>
            </div>
          </div>
          
          <div className="prose max-w-none mb-12 text-mixtape-text">
            <h2 className="text-2xl font-bold mb-6 text-gradient-vibrant inline-block">About This Journey</h2>
            <p className="text-mixtape-text">
              From the vibrant streets of Berkeley to the lush forests of Oregon, we&apos;re traveling up the Pacific Coast, 
              meeting locals and fellow travelers along the way. Our journey takes us through charming coastal towns, 
              majestic redwood forests, and everything in between.
            </p>
            <p className="text-mixtape-text">
              Throughout our adventure, we&apos;ve been asking people we meet a simple question: 
              &quot;What is a song that reminds you of growing up?&quot; The answers have been as diverse and fascinating as 
              the people themselves, creating a rich tapestry of musical memories that span generations and genres.
            </p>
            <p className="text-mixtape-text">
              Each story adds another track to our collaborative journey playlist, capturing not just the music 
              but the personal connections and memories behind each song.
            </p>
          </div>
          
          <div className="text-center mb-12">
            <div className="mb-4">
              <div className="w-16 h-2 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-mixtape-text">
              <span className="text-gradient-vibrant inline">Journey Stories</span>
            </h2>
            <p className="text-lg text-mixtape-subtitle max-w-3xl mx-auto">
              Explore the personal stories and songs we've collected along this beautiful coastal journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {berekeleyOregonStories.map(story => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
          
          <div className="mt-16 bg-mixtape-light rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gradient-vibrant inline-block">Journey Playlist</h2>
            <div className="bg-gradient-to-r from-[#1DB954]/10 to-[#1DB954]/5 border border-[#1DB954]/20 p-6 rounded-lg flex items-center hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1DB954] to-[#1DB954]/80 rounded-full flex items-center justify-center mr-6 shadow-md">
                <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </div>
              <div>
                <p className="text-mixtape-text font-bold text-lg mb-1">Berkeley-Oregon Road Trip Playlist</p>
                <p className="text-mixtape-subtitle mb-3">Listen to all the songs that define this journey</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm font-medium text-[#1DB954] hover:text-[#1DB954]/80 transition-colors duration-300"
                >
                  Open in Spotify
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/trips" className="inline-block bg-gradient-primary text-mixtape-paper py-4 px-8 rounded-full hover:opacity-90 transition duration-300 shadow-lg transform hover:scale-105">
              Explore Other Journeys
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 