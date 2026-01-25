import { motion } from 'framer-motion';
import React from 'react';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-5 lgl:gap-10"
    >
      {/* part one */}
      <div>
        <div className="py-3 lgl:py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education BackGround</h2>
        </div>
        <div className="lgl:mt-7 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-5">
          <ResumeCard
            title="BTech in Computer Science Enginnering specialization in CYBER SECURITY"
            subTitle="Budge Budge Institute of Technology (2022 - 2026)"
            result="Currently in Final Year"
            des="Pursuing Bachelor of Technology in Computer Science and Engineering with specialization in Cyber Security. Gaining in-depth knowledge of core computer science subjects, cybersecurity principles, and hands-on experience in ethical hacking, penetration testing, and secure software development."
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="BBIT Public School (2020 - 2022)"
            result="1st Division"
            des="Completed 11th and 12th (Science stream) from this institute under the Central Board of Secondary Education (CBSE)."
          />
          <ResumeCard
            title="Secondary Education"
            subTitle="Budge Budge ST Thomas Memorial School (2007 - 2020)"
            result="1st Division"
            des="Started my schooling at this institute and completed Class 10 board examination under the West Bengal Board of Secondary Education."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education