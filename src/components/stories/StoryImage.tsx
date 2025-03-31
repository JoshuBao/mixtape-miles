import React from 'react';
import Image from 'next/image';
import { StoryData } from '@/types/story';
import { getStoryImagePath } from '@/data/imageMapping';

interface StoryImageProps {
  story: StoryData;
  index?: number;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill';
  alt?: string;
  showPlaceholder?: boolean;
}

const StoryImage: React.FC<StoryImageProps> = ({
  story,
  index = 0,
  className = '',
  width = 500,
  height = 300,
  priority = false,
  objectFit = 'cover',
  alt,
  showPlaceholder = true
}) => {
  const imagePath = getStoryImagePath(story, index);
  // We directly use the imagePath to determine if an image exists
  
  const altText = alt || `Photo of ${story.personName} from ${story.location}`;
  
  if (!imagePath && !showPlaceholder) {
    return null;
  }
  
  if (!imagePath) {
    // Fallback to emoji if no image is available
    return (
      <div 
        className={`bg-gradient-to-r from-mixtape-primary to-mixtape-secondary flex items-center justify-center text-white ${className}`}
        style={{ width, height }}
      >
        <span className="text-6xl">{story.emoji || '🎵'}</span>
      </div>
    );
  }
  
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      <Image
        src={imagePath}
        alt={altText}
        fill
        sizes={`(max-width: 768px) 100vw, ${width}px`}
        priority={priority}
        className={`transition-all duration-300 hover:scale-105 ${objectFit === 'cover' ? 'object-cover' : objectFit === 'contain' ? 'object-contain' : 'object-fill'}`}
      />
    </div>
  );
};

export default StoryImage; 