import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Internship = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-10"
    >
      <div className="font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2025</p>
        <h2 className="text-4xl font-bold">Internships</h2>
      </div>
      <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="Virtual Internship - Cybersecurity with AI"
          subTitle="NIIT Foundation"
          result="Completed"
          des="Successfully completed a comprehensive 4-week virtual internship program in Cybersecurity with Artificial Intelligence in July 2025. The program provided in-depth exposure to modern cybersecurity practices, AI-driven threat detection, and emerging technologies in information security. Gained practical knowledge in implementing AI solutions for cybersecurity challenges and understanding the intersection of machine learning with security frameworks."
        />
      </div>
    </motion.div>
  );
};

export default Internship;
