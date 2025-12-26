import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-10"
    >
      <div className="font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2019-2025</p>
        <h2 className="text-4xl font-bold">Tech-Fest & Achievements</h2>
      </div>
      <div className="w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="Certificate of Appreciation - ICSCCA 2K25"
          subTitle="International Conference on Smart Computing, Communication and Automation"
          result="Awarded"
          des="Recognized for instrumental contributions in developing the official conference website for ICSCCA 2K25, held on August 2nd & 3rd, 2025. Awarded by Budge Budge Institute of Technology (BBIT), Kolkata, acknowledging dedication and technical expertise in driving the conference's digital presence toward substantial success."
        />
        <ResumeCard
          title="Certificate of Completion - Bootcamp on Robotic Process Automation"
          subTitle="C-DAC Kolkata x Budge Budge Institute of Technology"
          result="92/100"
          des="Successfully completed the FutureSkills PRIME Bootcamp on Robotic Process Automation conducted by C-DAC Kolkata in association with Budge Budge Institute of Technology. The bootcamp was held from February 17th-21st, 2025, as part of the FutureSkills PRIME Project (A MeitY & nasscom Digital Skilling Initiative). Achieved an overall score of 92 marks with strong performance in both practical (44/44) and theoretical (48/48) assessments."
        />
        <ResumeCard
          title="Certificate of Workshop Completion - Ethical Hacking"
          subTitle="Remarkskill Education x Aarohan, NIT Durgapur"
          result="Completed"
          des="Successfully completed the Remark Skill Technical Workshop on Ethical Hacking held on March 22nd-23rd, 2025 at NIT Durgapur. The workshop, conducted in association with Aarohan (NIT Durgapur's annual techno-management fest), provided hands-on training in ethical hacking techniques, vulnerability assessment, and cybersecurity best practices."
        />
        <ResumeCard
          title="Codekaze Sep-23"
          subTitle="Coding Ninja collaborated with Naukri.com"
          result="Success"
          des="Advanced to the second round of the competitive coding championship, demonstrating strong problem-solving capabilities and algorithmic proficiency."
        />
        <ResumeCard
          title="League of Errors Coding Competition 2023"
          subTitle="Budge Budge Institute of Technology"
          result="Rank 55"
          des="Secured 55th position in the inter-collegiate competitive programming event organized by the Department of Computer Science & Engineering in collaboration with Coding Ninjas and Coders Club of BBIT."
        />
        <ResumeCard
          title="West Bengal State Student-Youth Science Fair 2019."
          subTitle="Government of West Bengal."
          result="2nd Runner Up"
          des="Awarded Second Runner-Up at the state-level science fair organized by the Department of Youth Services & Sports, Government of West Bengal. The project demonstrated innovative scientific research and received recognition among participants from across the state."
        />
        <ResumeCard
          title="EQUINOX 2019"
          subTitle="Techno International Batanagar"
          result="Runner Up"
          des="Secured Runner-Up position in the technical symposium EQUINOX 2019, showcasing innovative technical solutions and demonstrating excellence in inter-institutional competition."
        />
      </div>
    </motion.div>
  );
};

export default Achievement;