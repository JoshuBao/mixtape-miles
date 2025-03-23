import Link from 'next/link';
import { StoryData } from '@/types/story';

type StoryCardProps = {
  story: StoryData;
  featured?: boolean;
};

export default function StoryCard({ story, featured = false }: StoryCardProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ${featured ? 'md:col-span-2' : ''}`}>
      <div className="h-48 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 bg-opacity-80">
          <span className="text-white text-3xl">{story.emoji || '🎵'}</span>
        </div>
        {story.image && (
          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url('${story.image}')` }} />
        )}
      </div>
      <div className="p-6">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{story.location}</div>
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          &quot;{story.songTitle}&quot; - {story.artist}
        </h3>
        <div className="mb-4 text-indigo-500 font-semibold">{story.personName}</div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-4">
          {story.shortStory}
        </p>
        {story.slug && (
          <div className="mt-4">
            <Link 
              href={`/stories/${story.slug}`} 
              className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300"
            >
              Read Full Story →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 