import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education BackGround</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech in Computer Science"
            subTitle="Budge Budge Institute of Technology (2022 - 2026)"
            result="Currently I am in 3rd Year"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="BBIT Public School (2020 - 2022)"
            result="First Class"
            des="Class 12 with Science"
          />
          <ResumeCard
            title="Secondary Education"
            subTitle="Budge Budge ST Thomas Memorial School (2018 - 2020)"
            result="First Class"
            des="I have started my schooling from this institute."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education