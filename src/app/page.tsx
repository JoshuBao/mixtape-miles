import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 shadow-md">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold text-white mb-4 sm:mb-0">
            Mixtape Miles
          </h1>
          <nav>
            <ul className="flex space-x-6 text-white">
              <li>
                <Link href="/" className="hover:text-gray-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-200">
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
          <button className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300">
            Explore the Playlists
          </button>
        </div>
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/road-trip-bg.jpg')" }}></div>
        </div>
      </section>

      {/* Current Trip */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Current Journey: West Coast Adventure
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
                  <div className="text-gray-700 dark:text-gray-300 font-bold">Current Playlist: 14 songs</div>
                  <div className="mt-2 text-gray-600 dark:text-gray-400">Last addition: &quot;Dreams&quot; by Fleetwood Mac - Emily from Ashland, OR</div>
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
            {/* Entry 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400 text-5xl">🎵</span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Day 4 - Redding, CA</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  &quot;Come As You Are&quot; - Nirvana
                </h3>
                <div className="mb-4 text-indigo-500 font-semibold">John, 42</div>
                <p className="text-gray-600 dark:text-gray-300">
                  &quot;I was 14 when this came out. It was the first time I felt like music was speaking directly to me. 
                  I grew up in a small town where everyone knew your business and judged you for it. This song told 
                  me it was okay to just be myself.&quot;
                </p>
              </div>
            </div>

            {/* Entry 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400 text-5xl">🎵</span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Day 3 - Mount Shasta, CA</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  &quot;California Love&quot; - 2Pac
                </h3>
                <div className="mb-4 text-indigo-500 font-semibold">Maria, 37</div>
                <p className="text-gray-600 dark:text-gray-300">
                  &quot;Growing up in LA in the 90s, this song was the soundtrack to every block party. 
                  It reminds me of summer nights, my cousins visiting, and feeling like our neighborhood 
                  was the center of the universe.&quot;
                </p>
              </div>
            </div>

            {/* Entry 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400 text-5xl">🎵</span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Day 2 - Chico, CA</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  &quot;Fast Car&quot; - Tracy Chapman
                </h3>
                <div className="mb-4 text-indigo-500 font-semibold">David, 55</div>
                <p className="text-gray-600 dark:text-gray-300">
                  &quot;This song played on the radio the day I left home at 18. I had $200 in my pocket 
                  and a tank of gas. Every time I hear it, I&apos;m reminded of that feeling of both fear and 
                  freedom, driving into the unknown.&quot;
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/stories" className="inline-block bg-indigo-500 text-white py-3 px-8 rounded-full hover:bg-indigo-600 transition duration-300">
              View All Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Mixtape Miles</h2>
              <p className="mt-2 text-gray-400">
                Connecting through music, one journey at a time.
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
