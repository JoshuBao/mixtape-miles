import Link from 'next/link';

export default function Header() {
  return (
    <header 
      className="p-6 shadow-md"
      style={{ 
        background: 'linear-gradient(to right, #48A6A7, rgba(72, 166, 167, 0.8), #FF5A5F)' 
      }}
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold text-white mb-4 sm:mb-0">
          <Link href="/">Mixtape Miles</Link>
        </h1>
        <nav>
          <ul className="flex space-x-6 text-white">
            <li>
              <Link href="/" className="hover:text-[#F4F7F9]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#F4F7F9]">
                About
              </Link>
            </li>
            <li>
              <Link href="/trips" className="hover:text-[#F4F7F9]">
                All Trips
              </Link>
            </li>
            <li>
              <Link href="/stories" className="hover:text-[#F4F7F9]">
                Stories
              </Link>
            </li>
            {/* <li>
              <Link href="/contact" className="hover:text-[#F4F7F9]">
                Contact
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
} 