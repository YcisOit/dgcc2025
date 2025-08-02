'use client';
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#024357] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-30">

        {/* Column 1 - College Info & Map */}
        <div>
          <h2 className="text-lg font-bold border-l-4 border-yellow-500 pl-2 mb-4">
            DHANANJAYRAO GADGIL COLLEGE OF COMMERCE
          </h2>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-4 text-gray-300">
            <a href="#" className="hover:text-yellow-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-500"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-500"><FaInstagram /></a>
          </div>

          {/* Google Map Embed */}
          <div className="rounded-md overflow-hidden">
            <iframe
              title="College Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2725.0077300312196!2d74.01133276760872!3d17.68503837444737!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc239eec721efb3%3A0xe9a9810657bf4778!2sDG%20College%2C%20Satara!5e0!3m2!1sen!2sus!4v1753954668886!5m2!1sen!2sus"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h2 className="text-lg font-bold border-l-4 border-yellow-500 pl-2 mb-4">
            QUICK LINKS
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-yellow-500">Home</a></li>
            <li><a href="#" className="hover:text-yellow-500">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-500">Statutory Committees</a></li>
            <li><a href="#" className="hover:text-yellow-500">UG And PG Programme</a></li>
            <li><a href="#" className="hover:text-yellow-500">Coc Courses</a></li>
            <li><a href="#" className="hover:text-yellow-500">Alumni</a></li>
          </ul>
        </div>

        {/* Column 3 - Other Links */}
        <div>
          <h2 className="text-lg font-bold border-l-4 border-yellow-500 pl-2 mb-4">
            OTHER LINKS
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-yellow-500">Placement</a></li>
            <li><a href="#" className="hover:text-yellow-500">Research</a></li>
            <li><a href="#" className="hover:text-yellow-500">Patent</a></li>
            <li><a href="#" className="hover:text-yellow-500">RIT</a></li>
            <li><a href="#" className="hover:text-yellow-500">NIRF</a></li>
            <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
            <li><a href="#" className="hover:text-yellow-500">Support</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="text-center text-white-400 font-bold text-m mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Dhananjayrao Gadgil College of Commerce, Satara.| Powered by YCIS OIT, Satara
      </div>
    </footer>
  );
};

export default Footer;
