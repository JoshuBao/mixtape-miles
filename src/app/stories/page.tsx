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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Song Stories
        </h1>
        <p className="text-center mb-12 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Every song has a story. Here are the ones we&apos;ve collected from people we&apos;ve met on our journeys.
          Each person shares a song that reminds them of growing up and the story behind it.
        </p>

        {/* Featured Stories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">Featured Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {storiesData.slice(0, 2).map(story => (
              <StoryCard key={story.id} story={story} featured={story.id === '1'} />
            ))}
          </div>
        </section>

        {/* All Stories */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">All Stories</h2>
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