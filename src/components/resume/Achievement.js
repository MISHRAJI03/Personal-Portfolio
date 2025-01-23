import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      <div className="w-full lg:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019-2025</p>
          <h2 className="text-4xl font-bold">Tech-Fest</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="EQUINOX 2019"
            subTitle="Techno International Batanagar"
            result="Runner Up"
            des="Won Runner Up in the event of Tech-Fest EQUINOX 2019."
          />
          <ResumeCard
            title="West Bengal State Student-Youth Science Fair 2019."
            subTitle="Government of West Bengal."
            result="2nd Runner Up"
            des="This event is organized by the Department of Youth Services & Sports, Government of West Bengal in collaboration with Departments of School Education, Higher Education, Government of West Bengal, Department of Science & Technology and Bio-technology, Government of West Bengal, West Bengal State Council of Science & Technology, Jagadis Bose National science Talent Search & Birla Industrial & Technological Museum, Kolkata."
          />
          <ResumeCard
            title="League of Errors Coding Competition"
            subTitle="Budge Budge Institute of Technology"
            result="Rank 55"
            des="This event is organized by the Department of Computer Science & Engineering, Budge Budge Institute of Technology in collaboration with Coding Ninja and Coders Club of BBIT."
          />
          <ResumeCard
            title="Codekaze Sep-23"
            subTitle="Coding Ninja collaborated with Naukri.com"
            result="Success"
            des="Successfully qualified for round 2"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2025</p>
          <h2 className="text-4xl font-bold">Courses</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="C Programming Language"
            subTitle="QSPIDER"
            result="Success"
            des="Successfully Completed my course on C Programming Language from QSPIDER."
          />
          <ResumeCard
            title="DBMS"
            subTitle="QSPIDER"
            result="Success"
            des="Successfully Completed my course on DBMS from QSPIDER."
          />
          <ResumeCard
            title="Artificial Intelligence Fundamentals"
            subTitle="IBM"
            result="Success"
            des="Successfully Completed my course on Artificial Intelligence Fundamentals from IBM."
          />
          <ResumeCard
            title="Cyber Essentials"
            subTitle="CISCO"
            result="Success"
            des="Successfully Completed my course on Cyber Essentials from CISCO and certified as Junior Cyber Security Analyst."
          />
          <ResumeCard
            title="Geo Data & Cyber Security"
            subTitle="ISRO"
            result="Success"
            des="Successfully Completed my course on Geo Data & Cyber Security from ISRO."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;