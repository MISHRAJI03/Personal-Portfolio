import React from 'react';
import { FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { footerImg } from "../../assets/index";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#1e2024] to-[#23272b] border-t-[1px] border-t-black">
      <div className="max-w-screen-xl mx-auto px-4 py-2">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-6">
          
          {/* Image Section */}
          <div className="flex items-center justify-center md:col-span-1">
            <div className="w-full rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={footerImg} 
                alt="Bishal Kumar Mishra - Cybersecurity Professional" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* About Section */}
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-white mb-1">BISHAL KUMAR MISHRA</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Computer Science Engineering student specializing in Cyber Security. 
              Passionate about building secure web applications and exploring cybersecurity challenges.
            </p>
            <div className="flex gap-3 mt-2">
              <a 
                href="https://www.instagram.com/bishal._.mishra" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://x.com/BishalKumarMi10?s=08" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://www.linkedin.com/in/bishal-mishra03?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="https://github.com/MISHRAJI03" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-white mb-1">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <a href="#home" className="text-base text-gray-400 hover:text-designColor transition-colors duration-300">Home</a>
              <a href="#features" className="text-base text-gray-400 hover:text-designColor transition-colors duration-300">Features</a>
              <a href="#projects" className="text-base text-gray-400 hover:text-designColor transition-colors duration-300">Projects</a>
              <a href="#resume" className="text-base text-gray-400 hover:text-designColor transition-colors duration-300">Resume</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-white">Get In Touch</h3>
            <div className="flex flex-col gap-3 text-base">
              <div className="text-gray-400">
                <span className="text-designColor font-semibold block">Location:</span>
                Kolkata, West Bengal, India
              </div>
              <div className="text-gray-400">
                <span className="text-designColor font-semibold block">Phone:</span>
                <a href="tel:+918584965918" className="hover:text-designColor transition-colors">+91 8584965918</a>
              </div>
              <div className="text-gray-400">
                <span className="text-designColor font-semibold block">Email:</span>
                <a href="mailto:bishalkmishra@zohomail.in" className="hover:text-designColor transition-colors break-all">bishalkmishra@zohomail.in</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-2">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Bishal Kumar Mishra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;