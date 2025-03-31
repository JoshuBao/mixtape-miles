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
  
  return (
    <div className="min-h-screen bg-mixtape-paper">
      <Header />

      {/* Redesigned Hero Section with Split Layout */}
      <section className="relative min-h-[85vh] flex flex-col lg:flex-row items-center overflow-hidden">
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 h-full z-20 p-8 lg:p-16 flex items-center justify-center">
          <div className="max-w-2xl bg-white/95 rounded-2xl shadow-2xl p-8 lg:p-12 border border-mixtape-primary/20 relative z-20">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight">
              <span className="text-mixtape-dark">
                Songs That Shaped Us
              </span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 font-medium leading-relaxed text-mixtape-text">
              Collecting the soundtrack of our journeys by asking travelers and locals about the music that defines their lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 relative z-30">
              <Link 
                href="/stories" 
                className="bg-[#E76F51] text-white font-bold py-3 px-6 rounded-full shadow-lg text-center border-2 border-white"
              >
                Explore the Playlists
              </Link>
              <Link 
                href="/trips" 
                className="bg-[#264653] text-white font-bold py-3 px-6 rounded-full shadow-lg text-center border-2 border-white"
              >
                View Our Journeys
              </Link>
            </div>
          </div>
        </div>
        
        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 h-full relative z-10">
          <div className="relative h-[50vh] lg:h-[85vh] w-full overflow-hidden">
            <Image 
              src="/MixtapeMiles.png" 
              alt="Mixtape Miles" 
              fill 
              className="object-contain object-center lg:object-cover lg:object-right"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={95}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:from-transparent lg:via-transparent"></div>
          </div>
          
          {/* Animated Musical Notes with enhanced visibility */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 right-1/5 animate-float-slow text-4xl drop-shadow-lg">
              <span className="bg-mixtape-primary text-white p-2 rounded-full shadow-lg">🎵</span>
            </div>
            <div className="absolute top-1/3 right-1/4 animate-float-medium text-3xl drop-shadow-lg">
              <span className="bg-mixtape-secondary text-white p-2 rounded-full shadow-lg">🎧</span>
            </div>
            <div className="absolute bottom-1/3 right-1/3 animate-float-fast text-5xl drop-shadow-lg">
              <span className="bg-mixtape-tertiary text-white p-2 rounded-full shadow-lg">🎸</span>
            </div>
          </div>
          
          {/* Vinyl Record Animation with improved styling */}
          <div className="vinyl-record hidden lg:block absolute -bottom-20 -right-10">
            <div className="vinyl-disc shadow-2xl">
              <div className="vinyl-center">
                <div className="vinyl-hole"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background gradient overlay for mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/50 lg:hidden z-10"></div>
      </section>

      {/* Interactive Map Section with Hover Effects */}
      <section className="py-16 px-6 bg-mixtape-cream">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <div className="mb-4">
              <div className="w-16 h-2 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-mixtape-text">
              <span className="text-mixtape-dark inline">Interactive Mixtape Map</span>
            </h2>
            <p className="text-lg text-mixtape-subtitle max-w-3xl mx-auto">
              Explore our journey through music and stories. Each pin represents a location where we met someone 
              and collected their song. Follow the trails to discover the soundtrack of our travels.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-mixtape-primary/40 to-mixtape-primary/20 rounded-full flex items-center justify-center transform -rotate-12 z-10">
              <span className="text-3xl">🎵</span>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-mixtape-secondary/20 to-mixtape-secondary/40 rounded-full flex items-center justify-center transform rotate-12 z-10">
              <span className="text-2xl">🚐</span>
            </div>
            
            <div className="bg-mixtape-paper rounded-xl shadow-xl p-4 transform transition duration-500 hover:shadow-2xl relative z-0">
              <MapComponent />
            </div>
          </div>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-mixtape-mint to-mixtape-mint/70 rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-mixtape-primary/30 to-mixtape-primary flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-mixtape-text">Explore Journeys</h3>
              </div>
              <p className="text-mixtape-subtitle">
                Follow the colored paths to trace our different road trips and adventures. Each journey has its own theme and collection of stories.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-mixtape-coral to-mixtape-coral/70 rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-mixtape-secondary/30 to-mixtape-secondary flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            
            <div className="bg-gradient-to-br from-mixtape-sunlight to-mixtape-sunlight/70 rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-mixtape-tertiary/30 to-mixtape-tertiary flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <div className="w-16 h-16 rounded-full bg-gradient-secondary-to-tertiary flex items-center justify-center mx-auto">
                <span className="text-white text-3xl">🚐</span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
                NOW
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-mixtape-text">
              <span className="text-mixtape-dark inline">Our Musical Journeys</span>
            </h2>
            <p className="text-lg text-mixtape-subtitle max-w-3xl mx-auto">
              Follow our adventures as we collect songs and stories from travelers and locals around the world.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Current Trip */}
            <div className="bg-mixtape-paper rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-mixtape-primary-200">
              <div className="h-48 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-primary">
                  <span className="text-white text-3xl font-bold">CURRENT JOURNEY</span>
                </div>
                <div className="absolute top-0 right-0 bg-gradient-secondary-to-tertiary text-white px-3 py-1 rounded-bl-lg text-sm font-bold">
                  ACTIVE
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-mixtape-primary bg-mixtape-primary-100 rounded-full border border-mixtape-primary-200">March 2025</span>
                <h2 className="text-2xl font-bold mb-2 text-mixtape-text">Berkeley-Oregon Road Trip</h2>
                <p className="text-mixtape-subtitle mb-4">
                  Theme: What is a song that reminds you of growing up?
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-mixtape-subtitle font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-mixtape-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                    {berekeleyOregonStories.length} songs collected
                  </span>
                </div>
                <Link href="/trips/berkeley-oregon" className="block w-full text-center bg-gradient-primary text-white py-2 px-4 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-md">
                  View Journey
                </Link>
              </div>
            </div>
            
            {/* Planned Trip */}
            <div className="bg-mixtape-paper rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-mixtape-secondary/20">
              <div className="h-48 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-mixtape-secondary via-mixtape-secondary/90 to-mixtape-tertiary">
                  <span className="text-white text-3xl font-bold">PLANNED</span>
                </div>
                <div className="absolute top-0 right-0 bg-gradient-to-br from-mixtape-tertiary to-mixtape-secondary text-white px-3 py-1 rounded-bl-lg text-sm font-bold">
                  UPCOMING
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-mixtape-secondary bg-gradient-to-r from-mixtape-secondary/20 to-mixtape-secondary/5 rounded-full border border-mixtape-secondary/20">Summer 2025</span>
                <h2 className="text-2xl font-bold mb-2 text-mixtape-text">Southern California Coastal Tour</h2>
                <p className="text-mixtape-subtitle mb-4">
                  Theme: What song makes you feel most alive?
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-mixtape-subtitle font-medium">Coming Soon</span>
                </div>
                <div className="w-full py-2 px-4 text-center text-mixtape-secondary bg-gradient-to-r from-mixtape-secondary/10 to-mixtape-secondary/5 border border-mixtape-secondary/20 rounded-lg">
                  Coming Soon
                </div>
              </div>
            </div>
            
            {/* Planned Trip */}
            <div className="bg-mixtape-paper rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-mixtape-primary/20">
              <div className="h-48 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-mixtape-primary via-mixtape-primary/80 to-mixtape-tertiary">
                  <span className="text-white text-3xl font-bold">PLANNED</span>
                </div>
                <div className="absolute top-0 right-0 bg-gradient-to-br from-mixtape-tertiary to-mixtape-primary text-white px-3 py-1 rounded-bl-lg text-sm font-bold">
                  UPCOMING
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-mixtape-primary bg-gradient-to-r from-mixtape-primary/20 to-mixtape-primary/5 rounded-full border border-mixtape-primary/20">Fall 2025</span>
                <h2 className="text-2xl font-bold mb-2 text-mixtape-text">Deep South Music Tour</h2>
                <p className="text-mixtape-subtitle mb-4">
                  Theme: What song represents your hometown?
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-mixtape-subtitle font-medium">Coming Soon</span>
                </div>
                <div className="w-full py-2 px-4 text-center text-mixtape-primary bg-gradient-to-r from-mixtape-primary/10 to-mixtape-primary/5 border border-mixtape-primary/20 rounded-lg">
                  Planned
                </div>
              </div>
            </div>
            
            {/* International Trip */}
            <div className="bg-mixtape-paper rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-mixtape-tertiary/20">
              <div className="h-48 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-mixtape-tertiary via-mixtape-tertiary/80 to-mixtape-primary">
                  <span className="text-white text-3xl font-bold">INTERNATIONAL</span>
                </div>
                <div className="absolute top-0 right-0 bg-gradient-to-br from-mixtape-primary to-mixtape-tertiary text-white px-3 py-1 rounded-bl-lg text-sm font-bold">
                  FUTURE
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-mixtape-tertiary bg-gradient-to-r from-mixtape-tertiary/20 to-mixtape-tertiary/5 rounded-full border border-mixtape-tertiary/20">Winter 2025</span>
                <h2 className="text-2xl font-bold mb-2 text-mixtape-text">Tokyo to Kyoto by Rail</h2>
                <p className="text-mixtape-subtitle mb-4">
                  Theme: What song transports you to another time?
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-mixtape-subtitle font-medium">In Planning</span>
                </div>
                <div className="w-full py-2 px-4 text-center text-mixtape-tertiary bg-gradient-to-r from-mixtape-tertiary/10 to-mixtape-tertiary/5 border border-mixtape-tertiary/20 rounded-lg">
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
            <div className="relative inline-block mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-mixtape-primary to-mixtape-secondary flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-mixtape-secondary rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-mixtape-text">
              <span className="text-mixtape-dark inline">Recent Song Stories</span>
            </h2>
            <p className="text-lg text-mixtape-subtitle max-w-3xl mx-auto">
              Discover the latest stories and songs we&apos;ve collected on our journey, each representing a unique person and their musical memories.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {recentStories.map(story => (
              <div 
                key={story.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-mixtape-primary/10 hover-lift shine"
              >
                <div className="p-1">
                  <div className="h-48 bg-gradient-to-r from-mixtape-primary to-mixtape-secondary rounded-t-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="text-white text-8xl p-4 drop-shadow-lg relative z-10">{story.emoji || '🎵'}</div>
                    <div className="absolute bottom-3 left-3 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white font-medium shadow-sm">
                      {story.location.split(',')[0]}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-mixtape-text hover:text-mixtape-primary transition-colors duration-300">
                        {story.personName}
                      </h3>
                      <span className="bg-gradient-to-r from-mixtape-primary/20 to-mixtape-primary/5 text-mixtape-primary text-xs px-3 py-1 rounded-full border border-mixtape-primary/20">
                        {story.journeyDate}
                      </span>
                    </div>
                    
                    <div className="bg-gradient-to-r from-mixtape-mint to-mixtape-mint/50 p-4 rounded-lg mb-4 shadow-sm">
                      <div className="text-sm font-medium text-mixtape-primary mb-1">
                        Song Choice
                      </div>
                      <p className="font-semibold text-mixtape-text">&quot;{story.songTitle}&quot;</p>
                      <p className="text-mixtape-subtitle text-sm flex items-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                        {story.artist}
                      </p>
                    </div>
                    
                    <p className="text-mixtape-subtitle mb-5 line-clamp-3">
                      {story.shortStory}
                    </p>
                    
                    <Link href={`/stories/${story.slug || story.id}`} className="inline-flex items-center text-mixtape-primary font-medium hover:text-mixtape-secondary transition-colors duration-300 group">
                      Read full story
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/stories" 
              className="inline-block bg-mixtape-dark text-mixtape-paper py-3 px-8 rounded-full hover:bg-mixtape-dark/90 transition duration-300 shadow-lg transform hover:scale-105 font-bold"
            >
              <span className="flex items-center">
                <span>View All Stories</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
