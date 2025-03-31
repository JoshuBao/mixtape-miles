import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-mixtape-primary via-mixtape-primary/80 to-mixtape-secondary p-6 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold text-mixtape-paper mb-4 sm:mb-0">
          <Link href="/" className="flex items-center">
            <span className="mr-2">🎵</span>
            <span className="relative">
              Mixtape Miles
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-mixtape-tertiary rounded-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-6 text-mixtape-paper">
            <li className="relative group">
              <Link href="/" className="group-hover:text-mixtape-tertiary transition-colors duration-200">
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-mixtape-tertiary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link href="/about" className="group-hover:text-mixtape-tertiary transition-colors duration-200">
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-mixtape-tertiary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link href="/trips" className="group-hover:text-mixtape-tertiary transition-colors duration-200">
                All Trips
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-mixtape-tertiary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link href="/stories" className="group-hover:text-mixtape-tertiary transition-colors duration-200">
                Stories
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-mixtape-tertiary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
            {/* <li className="relative group">
              <Link href="/contact" className="group-hover:text-mixtape-tertiary transition-colors duration-200">
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-mixtape-tertiary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
} 