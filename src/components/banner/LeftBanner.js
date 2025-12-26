import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { resume } from "../../assets/index";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Cyber Security Student.","Website Developer.","Professional Coder.", "Graphics Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-2 sm:gap-4 px-2 sm:px-4 md:px-0">
      <div className="flex flex-col gap-3 sm:gap-5">
        <h4 className="text-base sm:text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Bishal Kumar Mishra</span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-sm sm:text-base font-bodyFont leading-6 tracking-wide text-justify">
        Final-year Computer Science Engineering student specializing in Cyber Security at Budge Budge Institute of Technology. Currently pursuing Certified Ethical Hacker (CEH) certification, demonstrating commitment to professional excellence in cybersecurity. Passionate about ethical hacking and penetration testing with a strong foundation in data structures, algorithms, and security frameworks. Aspiring Security Analyst and Full Stack Developer, combining technical expertise in vulnerability assessment with modern web development skills. Proven problem-solver with recognition in Science Tech Fairs and hands-on experience in hardware testing and statistical analysis.
        </p>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit px-8 py-3 text-sm font-bold text-white tracking-wider cursor-pointer rounded-full bg-gradient-to-r from-designColor via-purple-600 to-blue-600 bg-[length:200%_100%] hover:scale-110 transition-all duration-500 border-2 border-designColor uppercase relative overflow-hidden group inline-block"
          style={{ animation: 'gradient 4s ease infinite, ease-in-out infinite, float 3s ease-in-out infinite' }}
        >
          <span className="relative z-10">View Resume</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
        </a>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner