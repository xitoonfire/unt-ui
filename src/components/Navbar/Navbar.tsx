import { useState } from 'react';

export interface NavbarProps {
  links: { name: string; href: string }[];
  logoSrc: string;
  altText?: string;
  className?: string;
}

function Navbar({ links, logoSrc, altText = 'Logo', className = '' }: NavbarProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`bg-gray-800 shadow-md py-4 px-6 ${className}`} role="navigation">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src={logoSrc} alt={altText} className="h-8 w-auto" />
        </div>

        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-white hover:text-blue-600">
              {link.name}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-untblue"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 transition duration-300 ease-in-out">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="block text-white hover:text-untblue">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;