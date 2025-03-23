import Link from 'next/link';

export default function Header() {
  return (
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
              <Link href="/about" className="hover:text-gray-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/trips" className="hover:text-gray-200">
                All Trips
              </Link>
            </li>
            <li>
              <Link href="/stories" className="hover:text-gray-200">
                Stories
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-200">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 