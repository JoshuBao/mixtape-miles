import Link from 'next/link';
import { StoryData } from '@/types/story';
import StoryImage from './StoryImage';
import { hasStoryImage } from '@/data/imageMapping';

type StoryCardProps = {
  story: StoryData;
  featured?: boolean;
};

export default function StoryCard({ story, featured = false }: StoryCardProps) {
  // Choose background color based on journey
  const getBgColor = (journey: string) => {
    if (journey === 'Berkeley-Oregon Road Trip') {
      return 'from-mixtape-secondary to-mixtape-secondary/80';
    }
    // Default
    return 'from-mixtape-primary to-mixtape-primary/80';
  };

  const hasImage = hasStoryImage(story);

  return (
    <div className={`bg-mixtape-paper rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${featured ? 'md:col-span-2' : ''}`}>
      <div className="h-48 relative">
        {hasImage ? (
          <StoryImage 
            story={story} 
            width={400} 
            height={192} 
            className="w-full h-full"
            objectFit="cover"
          />
        ) : (
          <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-r ${getBgColor(story.journey)}`}>
            <span className="text-mixtape-paper text-5xl">{story.emoji || '🎵'}</span>
          </div>
        )}
        
        {/* Overlay with journey and location info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <div className="flex justify-between items-center">
            <div className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-medium">
              {story.location.split(',')[0]}
            </div>
            <div className="text-xs text-white">{story.journey}</div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div className="bg-mixtape-primary/10 text-mixtape-primary text-sm px-3 py-1 rounded-full font-medium">
            {story.journeyDate}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-mixtape-text">
          &quot;{story.songTitle}&quot;
        </h3>
        <div className="mb-2 text-mixtape-secondary font-semibold flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
          by {story.artist}
        </div>
        
        <div className="bg-mixtape-mint/30 p-3 rounded-lg mb-4">
          <div className="text-sm font-medium text-mixtape-text/80 mb-1">Shared by</div>
          <div className="font-bold text-mixtape-text">{story.personName}</div>
        </div>
        
        <p className="text-mixtape-subtitle mb-4 line-clamp-3">
          {story.shortStory}
        </p>
        
        {story.slug && (
          <div className="mt-4">
            <Link 
              href={`/stories/${story.slug}`} 
              className="inline-flex items-center px-4 py-2 rounded-full bg-mixtape-primary/10 text-mixtape-primary font-medium hover:bg-mixtape-primary/20 transition-colors duration-300"
            >
              <span>Read Full Story</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 