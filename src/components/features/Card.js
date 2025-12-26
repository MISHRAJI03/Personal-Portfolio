import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const Card = ({item:{title,des,icon}}) => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-1 sm:py-3 md:py-5 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 h-auto min-h-[280px] sm:min-h-[300px] md:min-h-[320px]">
      <div className="w-full h-full overflow-hidden">
        <div className="flex h-full flex-col gap-4 sm:gap-5 md:gap-6 translate-y-8 sm:translate-y-10 md:translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-10 flex flex-col justify-between flex-shrink-0">
            {icon ? (
              <span className="text-3xl sm:text-4xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-3 sm:gap-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-gray-400">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card