import React from 'react'
import { FaInstagram, FaTwitter, FaLinkedinIn, FaReact, } from "react-icons/fa";
import { SiC, SiPython, SiMysql } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-2 sm:mb-4">Find me in</h2>
        <div className="flex gap-2 sm:gap-4">
          <a href="https://www.instagram.com/bishal._.mishra" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaInstagram />
          </a>
          <a href="https://x.com/BishalKumarMi10?s=08" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/bishal-mishra03" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-2 sm:mb-4">Best Skill On</h2>
        <div className="flex gap-2 sm:gap-4 flex-wrap">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiMysql />
          </span>
          <span className="bannerIcon">
            <SiC />
          </span>
          <span className="bannerIcon">
            <SiPython />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Media