import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative mt-8 lgl:mt-0">
      <img
        className="w-[180px] h-[240px] sm:w-[250px] sm:h-[320px] md:w-[300px] md:h-[400px] lgl:w-[500px] lgl:h-[680px] z-10 object-cover rounded-lg"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[200px] h-[150px] sm:w-[300px] sm:h-[220px] md:w-[350px] md:h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center rounded-b-lg"></div>
    </div>
  );
}

export default RightBanner