import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#0A0A0A]/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-gray-300 hover:text-[#0066FF] transition-colors">Services</a>
              <a href="#about" className="text-gray-300 hover:text-[#0066FF] transition-colors">About</a>
              <a href="#projects" className="text-gray-300 hover:text-[#0066FF] transition-colors">Projects</a>
              <a 
                href="#contact" 
                className="bg-[#0066FF] text-white px-6 py-2.5 rounded-md hover:bg-blue-600 transition-all duration-300 shadow-sm"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-300 hover:text-[#0066FF] transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#111111] border-t border-gray-800">
            <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-[#0066FF] transition-colors">Services</a>
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-[#0066FF] transition-colors">About</a>
            <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-[#0066FF] transition-colors">Projects</a>
            <a 
              href="#contact" 
              className="block px-3 py-2 text-[#0066FF] font-medium hover:text-blue-400 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}