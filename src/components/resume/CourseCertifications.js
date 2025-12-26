import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const CourseCertifications = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-10"
    >
      <div className="font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2022 - 2025</p>
        <h2 className="text-4xl font-bold">Course Certifications</h2>
      </div>
      <div className="w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="Digital Skills Readiness Program - Data Science"
          subTitle="TalentNext by Wipro Limited"
          result="Certified"
          des="Successfully completed the comprehensive Data Science course under the Digital Skills Readiness Program conducted by TalentNext in collaboration with Wipro Limited during July to October 2025. The program provided extensive training in data science fundamentals, analytics, and practical applications. Certificate ID: TNeat_SE_25_0.5_25022506."
        />
        <ResumeCard
          title="Geo Data & Cyber Security"
          subTitle="by ISRO in 2025"
          result="Success"
          des="Successfully Completed my course on Geo Data & Cyber Security from ISRO."
        />
        <ResumeCard
          title="Cyber Essentials"
          subTitle="by CISCO in 2024"
          result="Success"
          des="Successfully Completed my course on Cyber Essentials from CISCO and certified as Junior Cyber Security Analyst."
        />
        <ResumeCard
          title="Artificial Intelligence Fundamentals"
          subTitle="by IBM in 2024"
          result="Success"
          des="Successfully Completed my course on Artificial Intelligence Fundamentals from IBM."
        />
        <ResumeCard
          title="DBMS"
          subTitle="by QSPIDER in 2023"
          result="Success"
          des="Successfully Completed my course on DBMS from QSPIDER."
        />
        <ResumeCard
          title="C Programming Language"
          subTitle="by QSPIDER in 2023"
          result="Success"
          des="Successfully Completed my course on C Programming Language from QSPIDER."
        />
      </div>
    </motion.div>
  );
};

export default CourseCertifications;
