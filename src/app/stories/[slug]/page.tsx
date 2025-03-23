import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getStoryBySlug, storiesData } from '@/data/stories';
import type { Metadata } from 'next';

type StoryPageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata(
  props: StoryPageProps
): Promise<Metadata> {
  const { slug } = await props.params;
  const story = getStoryBySlug(slug);
  if (!story) {
    return {
      title: 'Story Not Found - Mixtape Miles',
    };
  }

  return {
    title: `"${story.songTitle}" - ${story.personName} | Mixtape Miles`,
    description: `${story.personName} shares how "${story.songTitle}" by ${story.artist} reminds them of growing up.`,
  };
}

export async function generateStaticParams() {
  return storiesData.map((story) => ({
    slug: story.slug,
  }));
}

export default async function StoryPage(props: StoryPageProps) {
  const { slug } = await props.params;
  const story = getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/stories" 
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 mb-4 inline-block"
          >
            ← Back to All Stories
          </Link>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-indigo-500 to-purple-600 relative flex items-center justify-center">
              <span className="text-white text-7xl">{story.emoji || '🎵'}</span>
            </div>
            
            <div className="p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{story.journey} • {story.journeyDate}</div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    &quot;{story.songTitle}&quot; by {story.artist}
                  </h1>
                  <div className="text-xl text-indigo-600 dark:text-indigo-400">{story.personName}</div>
                </div>
                <div className="mt-4 sm:mt-0 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                  {story.location}
                </div>
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {story.fullStory?.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-6 text-gray-700 dark:text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400 italic">
                  From our journey theme: <span className="font-medium">{story.theme}</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Spotify Embed Placeholder */}
          <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Listen to the Song</h2>
            <div className="bg-green-50 dark:bg-green-900 p-4 rounded flex items-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 font-medium">Spotify</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Listen to &quot;{story.songTitle}&quot; by {story.artist}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 