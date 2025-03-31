import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { storiesData } from '@/data/stories';

export default function TripsPage() {
  const berekeleyOregonStories = storiesData.filter(story => story.journey === 'Berkeley-Oregon Road Trip');
  
  return (
    <div className="min-h-screen bg-mixtape-paper">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-mixtape-text">Our Musical Journeys</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
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
              <div className="flex justify-between items-center">
                <span className="text-mixtape-subtitle font-medium">{berekeleyOregonStories.length} songs collected</span>
                <Link href="/trips/berkeley-oregon" className="text-mixtape-primary font-medium hover:text-mixtape-secondary transition-colors duration-300 flex items-center">
                  View Journey
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
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
              <div className="flex justify-between items-center">
                <span className="text-mixtape-subtitle font-medium">Coming Soon</span>
                <span className="text-mixtape-subtitle flex items-center">
                  Coming Soon
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
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
              <div className="flex justify-between items-center">
                <span className="text-mixtape-subtitle font-medium">Coming Soon</span>
                <span className="text-mixtape-primary flex items-center">
                  Planned
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
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
              <div className="flex justify-between items-center">
                <span className="text-mixtape-subtitle font-medium">In Planning</span>
                <span className="text-mixtape-tertiary flex items-center">
                  Coming Soon
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          
          {/* Collaborative Trip */}
          <div className="bg-mixtape-paper rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-mixtape-secondary/20 md:col-span-2">
            <div className="h-48 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-mixtape-secondary via-mixtape-tertiary to-mixtape-primary">
                <span className="text-mixtape-paper text-3xl font-bold">VOTE FOR OUR NEXT ADVENTURE</span>
              </div>
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-mixtape-secondary bg-mixtape-secondary/10 rounded-full">Spring 2026</span>
              <h2 className="text-2xl font-bold mb-2 text-mixtape-text">You Decide Our Next Destination!</h2>
              <p className="text-mixtape-subtitle mb-4">
                We&apos;re putting our next musical journey to a vote. Choose between a European backpacking adventure, a Southeast Asian exploration, or an Andean mountaineering expedition. 
                Each journey will collect songs around a theme you help select!
              </p>
              <div className="flex justify-between items-center">
                <span className="text-mixtape-subtitle font-medium">Voting opens December 1st</span>
                <span className="text-mixtape-secondary flex items-center">
                  Coming Soon
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 