'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDialogOpen, setIsAboutDialogOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <Image
              src="/images/smalllogofavicon.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-lg"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.a
              href="#home"
              className="text-white hover:text-red-400 font-medium transition-colors text-lg"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Home
            </motion.a>
            <motion.button
              className="text-white hover:text-red-400 font-medium transition-colors text-lg"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              onClick={() => setIsAboutDialogOpen(true)}
            >
              About
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 rounded-lg p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-4 border-t border-white/20"
          >
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-white hover:text-blue-300 font-medium transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <button
              className="text-white hover:text-blue-300 font-medium transition-colors px-2 py-1 text-left"
              onClick={() => setIsAboutDialogOpen(true)}
              >
                About Us

              </button>
              {/* Future menu items will be added here */}
            </nav>
          </motion.div>
        )}
      </div>
      
      {/* About Dialog */}
      <Dialog open={isAboutDialogOpen} onOpenChange={setIsAboutDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>About Paathshaala Classes</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-gray-600">
              Welcome to Paathshaala Classes - your premier destination for quality education and academic excellence.
            </p>
            <p className="text-gray-600">
              We provide comprehensive study materials, expert guidance, and innovative teaching methods to help students achieve their academic goals.
            </p>
            <p className="text-gray-600">
              Our mission is to make quality education accessible to all students, empowering them with knowledge and skills for a bright future.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
