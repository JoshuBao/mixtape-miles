import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoryCard from "@/components/stories/StoryCard";
import { getRecentStories, storiesData } from "@/data/stories";

export default function Home() {
  const recentStories = getRecentStories();
  const berekeleyOregonStories = storiesData.filter(story => story.journey === 'Berkeley-Oregon Road Trip');
  const latestStory = recentStories[0]; // First story is the most recent based on the sorting
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10"></div>
        <div className="relative z-20 text-center text-white p-6">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Songs That Shaped Us
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Collecting the soundtrack of our journeys by asking travelers and locals about the music that defines their lives.
          </p>
          <Link href="/stories" className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300 inline-block">
            Explore the Playlists
          </Link>
        </div>
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/road-trip-bg.jpg')" }}></div>
        </div>
      </section>

      {/* Current Trip */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Current Journey: Berkeley-Oregon Road Trip
          </h2>
          
          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-auto bg-indigo-100 flex items-center justify-center relative">
                  <div className="animate-pulse absolute w-24 h-24 bg-white opacity-75 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-indigo-500 font-bold">LISTEN TO THE PLAYLIST</p>
                </div>
              </div>
              <div className="p-8 md:w-1/2">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Trip Theme</div>
                <h3 className="mt-2 text-2xl leading-tight font-bold text-gray-900 dark:text-white">
                  What is a song that reminds you of growing up?
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  From Berkeley to Portland, we&apos;re traveling up the Pacific Coast, meeting locals and fellow travelers, 
                  asking about the songs that shaped their childhood. Each person 
                  we meet adds a new track to our collaborative journey playlist.
                </p>
                <div className="mt-6">
                  <div className="text-gray-700 dark:text-gray-300 font-bold">Current Playlist: {berekeleyOregonStories.length} songs</div>
                  {latestStory && (
                    <div className="mt-2 text-gray-600 dark:text-gray-400">
                      Last addition: &quot;{latestStory.songTitle}&quot; by {latestStory.artist} - {latestStory.personName} from {latestStory.location.split(',')[0]}
                    </div>
                  )}
                </div>
                <div className="mt-6">
                  <Link href="/trips/berkeley-oregon" className="inline-block text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300">
                    View Full Journey →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Entries */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Recent Song Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentStories.map(story => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/stories" className="inline-block bg-indigo-500 text-white py-3 px-8 rounded-full hover:bg-indigo-600 transition duration-300">
              View All Stories
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
