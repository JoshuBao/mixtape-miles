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
          ? 'text-white font-medium' 
          : 'text-mixtape-paper hover:text-mixtape-tertiary'
      } transition-colors duration-200`}
    >
      {children}
      <span 
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-mixtape-tertiary transform transition-transform duration-300 ${
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
    <header className="bg-gradient-to-r from-mixtape-primary via-mixtape-primary/80 to-mixtape-secondary p-6 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <Link 
          href="/" 
          className="flex items-center space-x-2 mb-4 sm:mb-0 group"
        >
          <div className="relative w-12 h-12 overflow-hidden rounded-full bg-white/10 p-1 shadow-lg">
            <Image 
              src="/MixtapeMiles.png" 
              alt="Mixtape Miles Logo" 
              width={48} 
              height={48} 
              className="object-contain transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <span className="text-2xl font-bold text-mixtape-paper hover:text-white transition-colors duration-300">
            Mixtape Miles
          </span>
        </Link>
        
        <nav>
          <ul className="flex space-x-2 sm:space-x-6">
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
                All Trips
              </NavLink>
            </li>
            <li>
              <NavLink href="/stories" active={isActive('/stories')}>
                Stories
              </NavLink>
            </li>
            {/* Hidden until the contact page is ready */}
            {/* <li>
              <NavLink href="/contact" active={isActive('/contact')}>
                Contact
              </NavLink>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 