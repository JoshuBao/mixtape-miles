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
    <div className="min-h-screen bg-mixtape-paper">
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
        <div className="absolute inset-0 bg-gradient-to-b from-mixtape-sky/70 via-mixtape-sky/50 to-mixtape-sky/70 z-10"></div>
        
        {/* Animated Musical Notes */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/5 animate-float-slow text-4xl opacity-70">🎵</div>
          <div className="absolute top-1/3 right-1/4 animate-float-medium text-3xl opacity-60">🎧</div>
          <div className="absolute bottom-1/3 left-1/3 animate-float-fast text-5xl opacity-80">🎸</div>
          <div className="absolute top-2/3 right-1/3 animate-float-slow text-4xl opacity-70">🎼</div>
          <div className="absolute bottom-1/4 right-1/5 animate-float-medium text-3xl opacity-60">🎹</div>
        </div>
        
        <div className="relative z-30 text-center text-mixtape-text p-6 max-w-5xl mx-auto">
          <h1 className="text-6xl sm:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="block transform hover:scale-105 transition-transform duration-300">Songs That Shaped Us</span>
          </h1>
          <p className="text-2xl sm:text-3xl mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Collecting the soundtrack of our journeys by asking travelers and locals about the music that defines their lives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/stories" 
              className="bg-gradient-to-r from-mixtape-primary to-mixtape-primary/80 text-mixtape-paper font-bold py-4 px-8 rounded-full hover:from-mixtape-primary/90 hover:to-mixtape-primary/70 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore the Playlists
            </Link>
            <Link 
              href="/trips" 
              className="bg-transparent border-2 border-mixtape-primary text-mixtape-primary font-bold py-4 px-8 rounded-full hover:bg-mixtape-primary/5 transition duration-300 transform hover:scale-105"
            >
              View Our Journeys
            </Link>
          </div>
        </div>
        
        {/* Vinyl Record Animation */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 z-20 opacity-70">
          <div className="w-full h-full rounded-full bg-mixtape-primary border-8 border-mixtape-sky shadow-2xl animate-spin-slow">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-mixtape-primary/70 to-mixtape-secondary/70"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section with Hover Effects */}
      <section className="py-16 px-6 bg-mixtape-cream">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4 text-mixtape-text">
              Interactive Mixtape Map
            </h2>
            <p className="text-lg text-mixtape-subtitle max-w-3xl mx-auto">
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
            
            <div className="bg-mixtape-paper rounded-xl shadow-xl p-4 transform transition duration-500 hover:shadow-2xl relative z-0">
              <MapComponent />
            </div>
          </div>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-mixtape-mint rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-mixtape-primary/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mixtape-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-mixtape-text">Explore Journeys</h3>
              </div>
              <p className="text-mixtape-subtitle">
                Follow the colored paths to trace our different road trips and adventures. Each journey has its own theme and collection of stories.
              </p>
            </div>
            
            <div className="bg-mixtape-coral rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-mixtape-secondary/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mixtape-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-mixtape-text">Discover Stories</h3>
              </div>
              <p className="text-mixtape-subtitle">
                Click on any marker to read the full story behind each song and learn about the people we met along our journey.
              </p>
            </div>
            
            <div className="bg-mixtape-sunlight rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-mixtape-tertiary/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mixtape-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-mixtape-text">Listen to Songs</h3>
              </div>
              <p className="text-mixtape-subtitle">
                Play the songs that define each person&apos;s story directly from the map. Create your own soundtrack as you explore our journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Journey with Enhanced UI */}
      <section className="py-16 px-6 bg-mixtape-sky">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block mb-4 relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-mixtape-tertiary to-mixtape-tertiary/80 flex items-center justify-center mx-auto">
                <span className="text-mixtape-paper text-3xl">🚐</span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-mixtape-secondary rounded-full flex items-center justify-center text-mixtape-paper text-xs font-bold animate-pulse">
                NOW
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-mixtape-text">
              Our Musical Journeys
            </h2>
            <p className="text-lg text-mixtape-subtitle max-w-3xl mx-auto">
              Follow our adventures as we collect songs and stories from travelers and locals around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Current Trip */}
            <div className="bg-mixtape-paper rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-mixtape-primary/20">
              <div className="h-48 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-mixtape-primary via-mixtape-primary/80 to-mixtape-secondary">
                  <span className="text-mixtape-paper text-3xl font-bold">CURRENT JOURNEY</span>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-mixtape-primary bg-mixtape-primary/10 rounded-full">March 2025</span>
                <h2 className="text-2xl font-bold mb-2 text-mixtape-text">Berkeley-Oregon Road Trip</h2>
                <p className="text-mixtape-subtitle mb-4">
                  Theme: What is a song that reminds you of growing up?
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-mixtape-subtitle font-medium">{berekeleyOregonStories.length} songs collected</span>
                </div>
                <Link href="/trips/berkeley-oregon" className="block w-full text-center bg-gradient-to-r from-mixtape-primary to-mixtape-secondary text-mixtape-paper py-2 px-4 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-md">
                  View Journey
                </Link>
              </div>
            </div>
            
            {/* Planned Trip */}
            <div className="bg-mixtape-paper rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-mixtape-secondary/20">
              <div className="h-48 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-mixtape-secondary via-mixtape-secondary/80 to-mixtape-tertiary">
                  <span className="text-mixtape-paper text-3xl font-bold">PLANNED</span>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-mixtape-secondary bg-mixtape-secondary/10 rounded-full">Summer 2025</span>
                <h2 className="text-2xl font-bold mb-2 text-mixtape-text">Southern California Coastal Tour</h2>
                <p className="text-mixtape-subtitle mb-4">
                  Theme: What song makes you feel most alive?
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-mixtape-subtitle font-medium">Coming Soon</span>
                </div>
                <div className="w-full py-2 px-4 text-center text-mixtape-subtitle/70 bg-mixtape-paper border border-mixtape-secondary/20 rounded-lg">
                  Coming Soon
                </div>
              </div>
            </div>
            
            {/* Planned Trip */}
            <div className="bg-mixtape-paper rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-mixtape-primary/20">
              <div className="h-48 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-mixtape-primary to-mixtape-tertiary">
                  <span className="text-mixtape-paper text-3xl font-bold">PLANNED</span>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-mixtape-primary bg-mixtape-primary/10 rounded-full">Fall 2025</span>
                <h2 className="text-2xl font-bold mb-2 text-mixtape-text">Deep South Music Tour</h2>
                <p className="text-mixtape-subtitle mb-4">
                  Theme: What song represents your hometown?
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-mixtape-subtitle font-medium">Coming Soon</span>
                </div>
                <div className="w-full py-2 px-4 text-center text-mixtape-primary/70 bg-mixtape-paper border border-mixtape-primary/20 rounded-lg">
                  Planned
                </div>
              </div>
            </div>
            
            {/* International Trip */}
            <div className="bg-mixtape-paper rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-mixtape-tertiary/20">
              <div className="h-48 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-mixtape-tertiary to-mixtape-primary">
                  <span className="text-mixtape-paper text-3xl font-bold">INTERNATIONAL</span>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-mixtape-tertiary bg-mixtape-tertiary/10 rounded-full">Winter 2025</span>
                <h2 className="text-2xl font-bold mb-2 text-mixtape-text">Tokyo to Kyoto by Rail</h2>
                <p className="text-mixtape-subtitle mb-4">
                  Theme: What song transports you to another time?
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-mixtape-subtitle font-medium">In Planning</span>
                </div>
                <div className="w-full py-2 px-4 text-center text-mixtape-tertiary/70 bg-mixtape-paper border border-mixtape-tertiary/20 rounded-lg">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Entries with Improved UI */}
      <section className="py-16 px-6 bg-mixtape-paper">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="w-12 h-12 rounded-full bg-mixtape-primary/20 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mixtape-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-mixtape-text">
              Recent Song Stories
            </h2>
            <p className="text-lg text-mixtape-subtitle max-w-3xl mx-auto">
              Discover the latest stories and songs we&apos;ve collected on our journey, each representing a unique person and their musical memories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentStories.map(story => (
              <div 
                key={story.id} 
                className="bg-mixtape-paper rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="p-1">
                  <div className="h-40 bg-gradient-to-r from-mixtape-primary to-mixtape-secondary rounded-t-lg flex items-center justify-center">
                    <div className="text-mixtape-paper text-6xl p-4">{story.emoji || '🎵'}</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-mixtape-text">
                        {story.personName}
                      </h3>
                      <span className="bg-mixtape-primary/10 text-mixtape-primary text-xs px-3 py-1 rounded-full">
                        {story.location.split(',')[0]}
                      </span>
                    </div>
                    
                    <div className="bg-mixtape-mint p-3 rounded-lg mb-4">
                      <div className="text-sm font-medium text-mixtape-primary mb-1">
                        Song Choice
                      </div>
                      <p className="font-semibold text-mixtape-text">&quot;{story.songTitle}&quot;</p>
                      <p className="text-mixtape-subtitle text-sm">by {story.artist}</p>
                    </div>
                    
                    <p className="text-mixtape-subtitle mb-4 line-clamp-3">
                      {story.shortStory}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-mixtape-subtitle">
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
            <Link href="/stories" className="inline-block bg-gradient-to-r from-mixtape-primary to-mixtape-secondary text-mixtape-paper py-4 px-8 rounded-full hover:from-mixtape-primary/90 hover:to-mixtape-secondary/90 transition duration-300 shadow-lg transform hover:scale-105">
              View All Stories
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
