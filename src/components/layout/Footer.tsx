'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: '#',
      color: 'hover:text-pink-500',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: '#',
      color: 'hover:text-blue-600',
    },
    {
      name: 'WhatsApp',
      icon: Phone,
      href: '#',
      color: 'hover:text-green-500',
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: 'info@paathshaalaclasses.com',
      href: 'mailto:info@paathshaalaclasses.com',
    },
    {
      icon: Phone,
      text: '+91 9876543210',
      href: 'tel:+919876543210',
    },
    {
      icon: MapPin,
      text: 'Your Location, City, State',
      href: '#',
    },
  ];

  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold">
                Paathshaala <span className="text-blue-400">Classes</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner in education. We provide quality coaching and
              comprehensive study materials to help students excel in their academic journey.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <item.icon size={16} className="text-blue-400 group-hover:text-blue-300" />
                  <span className="text-sm">{item.text}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 transition-all duration-300 ${social.color} hover:bg-gray-700`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Stay connected with us for updates and educational content.
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} PaathshaalaClasses. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
