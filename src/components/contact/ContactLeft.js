import React from 'react';
import { FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-3 sm:p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-6 sm:gap-8 justify-center">
      <img
        className="w-full h-40 sm:h-56 md:h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white pb-4">BISHAL KUMAR MISHRA</h3>
        <p className="text-base sm:text-lg font-normal text-gray-400">
        CSE -CYBER SECURITY
        </p>
        <p className="text-sm sm:text-base text-gray-400 tracking-wide">
        Kolkata, West Bengal, India
        </p>
        <p className="text-sm sm:text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 8584965918</span>
        </p>
        <p className="text-sm sm:text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">bishalkmishra@zohomail.in</span>
        </p>
      </div>
      <div className="flex flex-col gap-1 sm:gap-1">
        <h2 className="text-base uppercase font-titleFont sm:mb-2">Find me in</h2>
        <div className="flex sm:gap-4 flex-wrap">
        <a href="https://www.instagram.com/bishal._.mishra" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaInstagram />
          </a>
          <a href="https://x.com/BishalKumarMi10?s=08" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/bishal-mishra03?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft