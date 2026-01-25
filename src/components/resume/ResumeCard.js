import React from 'react'

const ResumeCard = ({title,subTitle,result,des}) => {
  return (
    <div className="w-full group flex">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-6 py-8 lgl:px-10 lgl:py-10 flex flex-col gap-6 lgl:gap-8 shadow-shadowOne">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div className="flex-1">
            <h3 className="text-lg md:text-xl lgl:text-2xl font-semibold group-hover:text-white duration-300 leading-tight">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div className="lgl:ml-4">
            <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium whitespace-nowrap">
              {result}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300 leading-relaxed">
          {des}
        </p>
      </div>
    </div>
  );
}

export default ResumeCard