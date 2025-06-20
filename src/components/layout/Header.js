import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-primary-600 text-2xl font-bold">ContentIdea<span className="text-primary-700">Genius</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "text-primary-600 font-medium" : "text-gray-600 hover:text-primary-600"
              }
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/generator" 
              className={({ isActive }) => 
                isActive ? "text-primary-600 font-medium" : "text-gray-600 hover:text-primary-600"
              }
            >
              Generate Ideas
            </NavLink>
            <NavLink 
              to="/saved" 
              className={({ isActive }) => 
                isActive ? "text-primary-600 font-medium" : "text-gray-600 hover:text-primary-600"
              }
            >
              Saved Ideas
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <div className="flex flex-col space-y-3">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "text-primary-600 font-medium" : "text-gray-600 hover:text-primary-600"
                }
                end
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/generator" 
                className={({ isActive }) => 
                  isActive ? "text-primary-600 font-medium" : "text-gray-600 hover:text-primary-600"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Generate Ideas
              </NavLink>
              <NavLink 
                to="/saved" 
                className={({ isActive }) => 
                  isActive ? "text-primary-600 font-medium" : "text-gray-600 hover:text-primary-600"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Saved Ideas
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;