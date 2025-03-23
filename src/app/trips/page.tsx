import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { storiesData } from '@/data/stories';

export default function TripsPage() {
  const berekeleyOregonStories = storiesData.filter(story => story.journey === 'Berkeley-Oregon Road Trip');
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Musical Journeys</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Current Trip */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <div className="h-48 bg-indigo-100 dark:bg-indigo-900 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
                <span className="text-white text-3xl font-bold">CURRENT JOURNEY</span>
              </div>
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-indigo-800 bg-indigo-100 dark:text-indigo-200 dark:bg-indigo-900 rounded-full">March 2025</span>
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Berkeley-Oregon Road Trip</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Theme: What is a song that reminds you of growing up?
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400">{berekeleyOregonStories.length} songs collected</span>
                <Link href="/trips/berkeley-oregon" className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300">
                  View Journey →
                </Link>
              </div>
            </div>
          </div>
          
          {/* Past Trip Example */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <div className="h-48 bg-gray-100 dark:bg-gray-700 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-pink-500 to-orange-500">
                <span className="text-white text-3xl font-bold">PLANNED</span>
              </div>
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-pink-800 bg-pink-100 dark:text-pink-200 dark:bg-pink-900 rounded-full">Summer 2025</span>
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Southern California Coastal Tour</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Theme: What song makes you feel most alive?
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400">Coming Soon</span>
                <span className="text-gray-400 dark:text-gray-500 font-medium">
                  Coming Soon →
                </span>
              </div>
            </div>
          </div>
          
          {/* Upcoming Trip */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <div className="h-48 bg-gray-100 dark:bg-gray-700 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-600">
                <span className="text-white text-3xl font-bold">PLANNED</span>
              </div>
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-blue-800 bg-blue-100 dark:text-blue-200 dark:bg-blue-900 rounded-full">Fall 2025</span>
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Deep South Music Tour</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Theme: What song represents your hometown?
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400">Coming Soon</span>
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  Planned →
                </span>
              </div>
            </div>
          </div>
          
          {/* International Trip Idea */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <div className="h-48 bg-gray-100 dark:bg-gray-700 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-teal-500 to-emerald-500">
                <span className="text-white text-3xl font-bold">INTERNATIONAL</span>
              </div>
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-teal-800 bg-teal-100 dark:text-teal-200 dark:bg-teal-900 rounded-full">Winter 2025</span>
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Tokyo to Kyoto by Rail</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Theme: What song transports you to another time?
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400">In Planning</span>
                <span className="text-teal-600 dark:text-teal-400 font-medium">
                  Coming Soon →
                </span>
              </div>
            </div>
          </div>
          
          {/* Collaborative Trip */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 md:col-span-2">
            <div className="h-48 bg-gray-100 dark:bg-gray-700 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
                <span className="text-white text-3xl font-bold">VOTE FOR OUR NEXT ADVENTURE</span>
              </div>
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-purple-800 bg-purple-100 dark:text-purple-200 dark:bg-purple-900 rounded-full">Spring 2026</span>
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">You Decide Our Next Destination!</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We&apos;re putting our next musical journey to a vote. Choose between a European backpacking adventure, a Southeast Asian exploration, or an Andean mountaineering expedition. 
                Each journey will collect songs around a theme you help select!
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400">Voting opens December 1st</span>
                <span className="text-purple-600 dark:text-purple-400 font-medium">
                  Coming Soon →
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