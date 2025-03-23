import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 shadow-md">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold text-white mb-4 sm:mb-0">
            <Link href="/">Mixtape Miles</Link>
          </h1>
          <nav>
            <ul className="flex space-x-6 text-white">
              <li>
                <Link href="/" className="hover:text-gray-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-200 border-b-2 border-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/trips" className="hover:text-gray-200">
                  All Trips
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Mixtape Miles</h1>
          
          <div className="prose lg:prose-xl dark:prose-invert">
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
              Mixtape Miles is a blog that combines two of life's greatest joys: 
              road trips and music. Through these journeys, we collect songs and 
              stories from strangers we meet along the way.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-800 dark:text-white">How It Works</h2>
            
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
              For each trip, we pick a theme — a question about music that tells us something 
              about the person answering it. As we travel from place to place, we ask that question 
              to strangers we encounter: baristas, hikers, shop owners, fellow travelers.
            </p>
            
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
              Each song they share becomes part of a collaborative playlist that tells the 
              story of our journey. By the end of the trip, we've created a mixtape that captures 
              not just where we've been, but the people we've met along the way.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-800 dark:text-white">The Mission</h2>
            
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
              In an age of algorithms and personalized playlists, Mixtape Miles is about the 
              magic of musical discovery through human connection. It's about stepping outside 
              our comfort zones, both geographically and sonically, to find new songs through 
              the personal stories of others.
            </p>
            
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
              Our hope is that these playlists will transport you to the places we've been 
              and introduce you to the people we've met, through the universal language of music.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-800 dark:text-white">Join the Journey</h2>
            
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
              Follow along with our travels, listen to our playlists, and if you see us on the road, 
              come say hello! We'd love to hear the song that reminds you of growing up, or whatever 
              our current theme might be.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Because the best mixtapes are made together.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Mixtape Miles</h2>
              <p className="mt-2 text-gray-400">
                Connecting through music, one mile at a time.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Spotify</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2023 Mixtape Miles. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white mr-4">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 