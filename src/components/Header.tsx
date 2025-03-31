'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface NavLinkProps {
  href: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink = ({ href, active, children }: NavLinkProps) => {
  return (
    <Link 
      href={href} 
      className={`relative group px-3 py-2 ${
        active 
          ? 'text-mixtape-dark font-semibold' 
          : 'text-mixtape-dark/90 hover:text-mixtape-dark'
      } transition-colors duration-200`}
    >
      {children}
      <span 
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-mixtape-dark transform transition-transform duration-300 ${
          active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
      ></span>
    </Link>
  );
};

const Header = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white p-4 lg:p-6 shadow-lg z-50 sticky top-0 border-b border-gray-100">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <Link 
          href="/" 
          className="flex items-center space-x-3 mb-4 sm:mb-0 group"
        >
          <div className="relative w-12 h-12 overflow-hidden rounded-full bg-mixtape-primary/10 p-1 shadow-lg transition-transform duration-300 group-hover:scale-105">
            <Image 
              src="/MixtapeMiles.png" 
              alt="Mixtape Miles Logo" 
              width={48} 
              height={48} 
              className="object-contain transition-all duration-300 group-hover:brightness-110"
            />
          </div>
          <span className="text-2xl font-bold text-mixtape-dark transition-all duration-300 group-hover:tracking-wide">
            Mixtape Miles
          </span>
        </Link>
        
        <nav className="bg-mixtape-primary/10 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border border-mixtape-primary/20">
          <ul className="flex space-x-1 sm:space-x-6">
            <li>
              <NavLink href="/" active={isActive('/')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/about" active={isActive('/about')}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink href="/trips" active={isActive('/trips')}>
                Trips
              </NavLink>
            </li>
            <li>
              <NavLink href="/stories" active={isActive('/stories')}>
                Stories
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 