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

export default function BerkeleyOregonPage() {
  const berekeleyOregonStories = getStoriesByJourney('Berkeley-Oregon Road Trip');
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link 
            href="/trips" 
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 mb-8 inline-block"
          >
            ← Back to All Journeys
          </Link>
          
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-8 mb-12 text-white">
            <h1 className="text-4xl font-bold mb-4">Berkeley-Oregon Road Trip</h1>
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <p className="text-lg mb-2">March 22, 2025</p>
                <p className="text-xl font-semibold">Theme: What is a song that reminds you of growing up?</p>
              </div>
              <div className="mt-4 md:mt-0 bg-white text-indigo-600 py-2 px-4 rounded-full font-bold">
                {berekeleyOregonStories.length} Stories Collected
              </div>
            </div>
          </div>
          
          <div className="prose max-w-none mb-12 text-gray-700 dark:text-gray-300">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">About This Journey</h2>
            <p>
              From the vibrant streets of Berkeley to the lush forests of Oregon, we're traveling up the Pacific Coast, 
              meeting locals and fellow travelers along the way. Our journey takes us through charming coastal towns, 
              majestic redwood forests, and everything in between.
            </p>
            <p>
              Throughout our adventure, we've been asking people we meet a simple question: 
              "What is a song that reminds you of growing up?" The answers have been as diverse and fascinating as 
              the people themselves, creating a rich tapestry of musical memories that span generations and genres.
            </p>
            <p>
              Each story adds another track to our collaborative journey playlist, capturing not just the music 
              but the personal connections and memories behind each song.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">Journey Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {berekeleyOregonStories.map(story => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
          
          <div className="mt-12 bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Listen to Our Journey Playlist</h2>
            <div className="bg-green-50 dark:bg-green-900 p-4 rounded flex items-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 font-medium">Spotify</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Listen to the complete Berkeley-Oregon Road Trip playlist</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 