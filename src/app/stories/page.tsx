import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoryCard from '@/components/stories/StoryCard';
import { storiesData } from '@/data/stories';

export const metadata = {
  title: 'Stories - Mixtape Miles',
  description: 'Read the stories of people we met and the songs that shaped their lives during our musical journeys.'
};

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-mixtape-paper">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto py-16 px-6">
        <div className="mb-12 text-center">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-mixtape-primary to-mixtape-secondary flex items-center justify-center mx-auto">
              <span className="text-mixtape-paper text-3xl">📖</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-center mb-4 text-mixtape-text">
            Song Stories
          </h1>
          <p className="text-center mb-6 text-mixtape-subtitle max-w-2xl mx-auto">
            Every song has a story. Here are the ones we&apos;ve collected from people we&apos;ve met on our journeys.
            Each person shares a song that reminds them of growing up and the story behind it.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-mixtape-primary to-mixtape-secondary rounded-full mx-auto"></div>
        </div>

        {/* Featured Stories */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 rounded-full bg-mixtape-tertiary/20 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mixtape-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-mixtape-text">Featured Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {storiesData.slice(0, 2).map(story => (
              <StoryCard key={story.id} story={story} featured={story.id === '1'} />
            ))}
          </div>
        </section>

        {/* All Stories */}
        <section>
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 rounded-full bg-mixtape-primary/20 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mixtape-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-mixtape-text">All Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {storiesData.map(story => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 