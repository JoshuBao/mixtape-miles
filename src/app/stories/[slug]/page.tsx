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

  // Function to determine background gradient based on journey
  const getJourneyGradient = (journey: string) => {
    switch (journey) {
      case 'Berkeley-Oregon Road Trip':
        return 'bg-gradient-primary';
      case 'Southern California Coastal Tour':
        return 'bg-gradient-secondary-to-tertiary';
      case 'Deep South Music Tour':
        return 'bg-gradient-forest';
      case 'Tokyo to Kyoto by Rail':
        return 'bg-gradient-tertiary-to-primary';
      default:
        return 'bg-gradient-primary';
    }
  };

  return (
    <div className="min-h-screen bg-mixtape-paper">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/stories" 
            className="text-mixtape-primary hover:text-mixtape-secondary transition-colors duration-300 mb-4 inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Back to All Stories
          </Link>

          <div className="bg-mixtape-paper rounded-xl shadow-lg overflow-hidden border border-mixtape-primary-100">
            <div className={`h-64 ${getJourneyGradient(story.journey)} relative flex items-center justify-center`}>
              <span className="text-white text-7xl drop-shadow-lg">{story.emoji || '🎵'}</span>
              <div className="absolute top-4 right-4 bg-mixtape-paper/90 backdrop-blur-sm text-mixtape-primary px-3 py-1 rounded-full text-sm font-medium shadow-md border border-mixtape-primary-200">
                {story.journey}
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-8">
                <div>
                  <div className="text-sm text-mixtape-subtitle mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-mixtape-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {story.journeyDate}
                  </div>
                  <h1 className="text-3xl font-bold text-mixtape-text mb-2">
                    <span className="text-gradient-vibrant">&quot;{story.songTitle}&quot;</span>
                  </h1>
                  <div className="text-xl text-mixtape-subtitle mb-1">by {story.artist}</div>
                  <div className="text-lg font-medium text-mixtape-primary">Shared by {story.personName}</div>
                </div>
                <div className="mt-4 sm:mt-0 px-4 py-2 bg-mixtape-primary-100 text-mixtape-primary rounded-full text-sm border border-mixtape-primary-200 flex items-center shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {story.location}
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                {story.fullStory?.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-6 text-mixtape-text">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-mixtape-primary-100">
                <p className="text-mixtape-subtitle italic flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-mixtape-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  From our journey theme: <span className="font-medium text-mixtape-text ml-1">{story.theme}</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Spotify Embed with Updated Styling */}
          <div className="mt-8 p-6 bg-mixtape-light rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gradient-vibrant inline-block">Listen to the Song</h2>
            <div className="bg-gradient-to-r from-[#1DB954]/10 to-[#1DB954]/5 border border-[#1DB954]/20 p-6 rounded-lg flex items-center hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1DB954] to-[#1DB954]/80 rounded-full flex items-center justify-center mr-6 shadow-md">
                <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </div>
              <div>
                <p className="text-mixtape-text font-bold text-lg mb-1">&quot;{story.songTitle}&quot; by {story.artist}</p>
                <p className="text-mixtape-subtitle mb-3">
                  {story.journey === 'Berkeley-Oregon Road Trip' 
                    ? 'This song is part of our Berkeley-Oregon journey playlist'
                    : 'Listen to this song on Spotify'
                  }
                </p>
                <a 
                  href={story.journey === 'Berkeley-Oregon Road Trip' 
                    ? "https://open.spotify.com/playlist/4vKTm0MjZo3LX6Htk19TaV?si=7afcdfda514d4ec4"
                    : "#"
                  }
                  target="_blank"
                  rel="noopener noreferrer" 
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
          
          {/* Navigation buttons */}
          <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link 
              href={`/stories`} 
              className="inline-block bg-mixtape-paper border border-mixtape-primary text-mixtape-primary py-3 px-6 rounded-full hover:bg-mixtape-primary-50 transition duration-300 shadow-md transform hover:scale-105"
            >
              All Stories
            </Link>
            
            <Link 
              href={`/trips/${story.journey.toLowerCase().replace(/\s+/g, '-')}`} 
              className="inline-block bg-gradient-primary text-mixtape-paper py-3 px-6 rounded-full hover:opacity-90 transition duration-300 shadow-md transform hover:scale-105"
            >
              Explore {story.journey}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 