import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {logo} from "../../assets/index"
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveLink('home')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 pl-5">
      <div>
        <img src={logo} alt="logo" className="border-3 rounded-lg p-1" />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-4 lg:gap-6">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={() => setActiveLink(link)}
                className={`block text-sm font-semibold text-white tracking-wider cursor-pointer px-6 py-2.5 rounded-md bg-gradient-to-r from-gray-800 to-gray-900 hover:from-designColor hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-designColor/30 border border-gray-700 hover:border-designColor uppercase ${activeLink === link ? 'active' : ''}`}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onSetActive={() => setActiveLink(item.link)}
                      className={`block text-sm font-semibold text-white tracking-wider cursor-pointer px-5 py-3 rounded-md bg-gradient-to-r from-gray-800 to-gray-900 hover:from-designColor hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-designColor/30 border border-gray-700 hover:border-designColor uppercase text-center ${activeLink === item.link ? 'active' : ''}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon">
                    <FaFacebookF />
                  </span>
                  <span className="bannerIcon">
                    <FaTwitter />
                  </span>
                  <span className="bannerIcon">
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar