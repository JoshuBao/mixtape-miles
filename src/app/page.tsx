'use client'
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getRecentStories, storiesData } from "@/data/stories";
import dynamic from 'next/dynamic';
import Image from "next/image";

const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  ssr: false
});

export default function Home() {
  const recentStories = getRecentStories();
  const berekeleyOregonStories = storiesData.filter(story => story.journey === 'Berkeley-Oregon Road Trip');
  const latestStory = recentStories[0]; // First story is the most recent based on the sorting
  
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Dynamic Background */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/nature.gif" 
            alt="Road trip background" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
        
        {/* Animated Musical Notes */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/5 animate-float-slow text-4xl opacity-70">🎵</div>
          <div className="absolute top-1/3 right-1/4 animate-float-medium text-3xl opacity-60">🎧</div>
          <div className="absolute bottom-1/3 left-1/3 animate-float-fast text-5xl opacity-80">🎸</div>
          <div className="absolute top-2/3 right-1/3 animate-float-slow text-4xl opacity-70">🎼</div>
          <div className="absolute bottom-1/4 right-1/5 animate-float-medium text-3xl opacity-60">🎹</div>
        </div>
        
        <div className="relative z-30 text-center text-white p-6 max-w-5xl mx-auto">
          <h1 className="text-6xl sm:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="block transform hover:scale-105 transition-transform duration-300">Songs That Shaped Us</span>
          </h1>
          <p className="text-2xl sm:text-3xl mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Collecting the soundtrack of our journeys by asking travelers and locals about the music that defines their lives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/stories" 
              className="bg-gradient-to-r from-mixtape-primary to-mixtape-primary/80 text-white font-bold py-4 px-8 rounded-full hover:from-mixtape-primary/90 hover:to-mixtape-primary/70 transition duration-300 transform hover:scale-105 shadow-lg"
              style={{ 
                background: 'linear-gradient(to right, #48A6A7, rgba(72, 166, 167, 0.8))',
                color: 'white' 
              }}
            >
              Explore the Playlists
            </Link>
            <Link 
              href="/trips" 
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition duration-300 transform hover:scale-105"
            >
              View Our Journeys
            </Link>
          </div>
        </div>
        
        {/* Vinyl Record Animation */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 z-20 opacity-70">
          <div className="w-full h-full rounded-full bg-black border-8 border-gray-900 shadow-2xl animate-spin-slow">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-mixtape-primary/70 to-mixtape-secondary/70"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section with Hover Effects */}
      <section className="py-16 px-6 bg-mixtape-light">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4 text-mixtape-dark">
              Interactive Mixtape Map
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our journey through music and stories. Each pin represents a location where we met someone 
              and collected their song. Follow the trails to discover the soundtrack of our travels.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-mixtape-primary/20 rounded-full flex items-center justify-center transform -rotate-12 z-10">
              <span className="text-3xl">🎵</span>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-mixtape-secondary/20 rounded-full flex items-center justify-center transform rotate-12 z-10">
              <span className="text-2xl">🚐</span>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl p-4 transform transition duration-500 hover:shadow-2xl relative z-0">
              <MapComponent />
            </div>
          </div>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-mixtape-primary/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mixtape-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-mixtape-dark">Explore Journeys</h3>
              </div>
              <p className="text-gray-600">
                Follow the colored paths to trace our different road trips and adventures. Each journey has its own theme and collection of stories.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-mixtape-secondary/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mixtape-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-mixtape-dark">Discover Stories</h3>
              </div>
              <p className="text-gray-600">
                Click on any marker to read the full story behind each song and learn about the people we met along our journey.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-mixtape-tertiary/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mixtape-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-mixtape-dark">Listen to Songs</h3>
              </div>
              <p className="text-gray-600">
                Play the songs that define each person&apos;s story directly from the map. Create your own soundtrack as you explore our journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Journey with Enhanced UI */}
      <section className="py-16 px-6 bg-mixtape-light">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block mb-4 relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-mixtape-tertiary to-mixtape-tertiary/80 flex items-center justify-center mx-auto">
                <span className="text-white text-3xl">🚐</span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-mixtape-secondary rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
                NOW
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-mixtape-dark">
              Current Journey: Berkeley-Oregon Road Trip
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow our current adventure as we travel up the Pacific Coast, collecting songs and stories along the way.
            </p>
          </div>
          
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition duration-500 hover:shadow-2xl">
            <div className="md:flex">
              <div className="md:w-2/5 relative">
                <div className="h-72 md:h-full bg-gradient-to-br from-mixtape-primary to-mixtape-secondary flex items-center justify-center relative overflow-hidden">
                  {/* Animated Cassette Tape */}
                  <div className="w-64 h-40 bg-gray-900 rounded-lg relative transform rotate-12 shadow-2xl">
                    <div className="absolute inset-2 bg-gray-800 rounded-sm flex flex-col items-center justify-center p-2">
                      <div className="w-full h-6 bg-white/10 rounded mb-2 flex items-center justify-center">
                        <span className="text-white text-xs font-mono">BERKELEY-OREGON MIX</span>
                      </div>
                      <div className="flex space-x-12">
                        <div className="w-12 h-12 rounded-full border-4 border-gray-700 flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-gray-700 animate-spin-slow"></div>
                        </div>
                        <div className="w-12 h-12 rounded-full border-4 border-gray-700 flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-gray-700 animate-spin-slow"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 right-2 h-4 bg-white/5 rounded flex items-center justify-center">
                        <span className="text-white text-[10px]">Songs That Remind Us of Growing Up</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Play Button */}
                  <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 animate-pulse">
                    <div className="bg-white/90 w-16 h-16 rounded-full shadow-xl flex items-center justify-center cursor-pointer hover:bg-white transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mixtape-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-white text-xs font-medium mt-2">PLAY MIXTAPE</div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:w-3/5">
                <div className="bg-mixtape-tertiary/10 px-4 py-2 rounded-lg inline-block mb-4">
                  <div className="text-mixtape-tertiary text-sm font-semibold flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Trip Theme
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-mixtape-dark mb-4">
                  What is a song that reminds you of growing up?
                </h3>
                
                <p className="text-lg text-gray-600 mb-6">
                  From Berkeley to Portland, we&apos;re traveling up the Pacific Coast, meeting locals and fellow travelers, 
                  asking about the songs that shaped their childhood. Each person 
                  we meet adds a new track to our collaborative journey playlist.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-mixtape-light p-4 rounded-lg">
                    <div className="text-gray-500 text-sm mb-1">Current Playlist</div>
                    <div className="text-mixtape-dark font-bold text-xl flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-mixtape-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                      {berekeleyOregonStories.length} songs
                    </div>
                  </div>
                  
                  {latestStory && (
                    <div className="bg-mixtape-light p-4 rounded-lg">
                      <div className="text-gray-500 text-sm mb-1">Latest Addition</div>
                      <div className="text-mixtape-dark font-bold">&quot;{latestStory.songTitle}&quot;</div>
                      <div className="text-gray-600 text-sm">
                        by {latestStory.artist} - {latestStory.personName} from {latestStory.location.split(',')[0]}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex">
                  <Link href="/trips/berkeley-oregon" className="flex items-center bg-gradient-to-r from-mixtape-primary to-mixtape-secondary text-white py-3 px-6 rounded-lg hover:from-mixtape-primary/90 hover:to-mixtape-secondary/90 transition duration-300 shadow-md transform hover:scale-105">
                    <span>View Full Journey</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Entries with Improved UI */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="w-12 h-12 rounded-full bg-mixtape-primary/20 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mixtape-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-mixtape-dark">
              Recent Song Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the latest stories and songs we&apos;ve collected on our journey, each representing a unique person and their musical memories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentStories.map(story => (
              <div 
                key={story.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="p-1">
                  <div className="h-40 bg-gradient-to-r from-mixtape-primary to-mixtape-secondary rounded-t-lg flex items-center justify-center">
                    <div className="text-white text-6xl p-4">{story.emoji || '🎵'}</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-mixtape-dark">
                        {story.personName}
                      </h3>
                      <span className="bg-mixtape-primary/10 text-mixtape-primary text-xs px-3 py-1 rounded-full">
                        {story.location.split(',')[0]}
                      </span>
                    </div>
                    
                    <div className="bg-mixtape-light p-3 rounded-lg mb-4">
                      <div className="text-sm font-medium text-mixtape-primary mb-1">
                        Song Choice
                      </div>
                      <p className="font-semibold text-mixtape-dark">&quot;{story.songTitle}&quot;</p>
                      <p className="text-gray-600 text-sm">by {story.artist}</p>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {story.shortStory}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {story.journeyDate}
                      </span>
                      <Link href={`/stories/${story.slug || story.id}`} className="text-mixtape-primary font-medium hover:text-mixtape-primary/80 inline-flex items-center">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/stories" className="inline-block bg-gradient-to-r from-mixtape-primary to-mixtape-secondary text-white py-4 px-8 rounded-full hover:from-mixtape-primary/90 hover:to-mixtape-secondary/90 transition duration-300 shadow-lg transform hover:scale-105">
              View All Stories
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
