import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Andrew Jay Consulting</h3>
            <p className="text-gray-300 mb-4">
              Helping small businesses unlock real productivity using AI and Microsoft 365.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/services" className="hover:text-white transition-colors">AI Meeting Summaries</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Document Q&A Bot</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Email Assistant</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/contact" className="hover:text-white transition-colors">Get in Touch</Link></li>
              <li><a href="https://calendly.com/andrewjay" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Book a Call</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Andrew Jay Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 