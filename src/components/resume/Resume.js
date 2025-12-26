import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Language from './Language';
import Achievement from './Achievement';
import CourseCertifications from './CourseCertifications';
import Internship from './Internship';

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [courseData, setCourseData] = useState(false);
  const [internshipData, setInternshipData] = useState(false);
  const [skillData, setSkillData] = useState(false);
  const [languageData, setLanguageData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-5 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="ACADEMICS" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-[10px]">
          <li
            onClick={() => {
              setEducationData(true);
              setCourseData(false);
              setSkillData(false);
              setLanguageData(false);
              setAchievementData(false);
            }}
            className={`resumeLi ${
              educationData
                ? "!bg-gradient-to-r !from-designColor !to-blue-600 !border-designColor !shadow-lg !shadow-designColor/30"
                : ""
            }`}
          >
            Education
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setCourseData(true);
              setInternshipData(false);
              setSkillData(false);
              setLanguageData(false);
              setAchievementData(false);
            }}
            className={`resumeLi text-center ${
              courseData
                ? "!bg-gradient-to-r !from-designColor !to-blue-600 !border-designColor !shadow-lg !shadow-designColor/30"
                : ""
            }`}
          >
            <span className="leading-tight">Course <br /> Certifications</span>
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setCourseData(false);
              setInternshipData(true);
              setSkillData(false);
              setLanguageData(false);
              setAchievementData(false);
            }}
            className={`resumeLi ${
              internshipData
                ? "!bg-gradient-to-r !from-designColor !to-blue-600 !border-designColor !shadow-lg !shadow-designColor/30"
                : ""
            }`}
          >
            Internships
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setCourseData(false);
              setInternshipData(false);
              setSkillData(true);
              setLanguageData(false);
              setAchievementData(false);
            }}
            className={`resumeLi text-center ${
              skillData ? "!bg-gradient-to-r !from-designColor !to-blue-600 !border-designColor !shadow-lg !shadow-designColor/30" : ""
            }`}
          >
            <span className="leading-tight">Professional <br /> Skills</span>
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setCourseData(false);
              setSkillData(false);
              setLanguageData(true);
              setAchievementData(false);
            }}
            className={`resumeLi ${
              languageData
                ? "!bg-gradient-to-r !from-designColor !to-blue-600 !border-designColor !shadow-lg !shadow-designColor/30" : ""
            }`}
          >
            Language
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setCourseData(false);
              setSkillData(false);
              setLanguageData(false);
              setAchievementData(true);
            }}
            className={`resumeLi ${
              achievementData
                ? "!bg-gradient-to-r !from-designColor !to-blue-600 !border-designColor !shadow-lg !shadow-designColor/30" : ""
            }`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {courseData && <CourseCertifications />}
      {skillData && <Skills />}
      {languageData && <Language />}
      {internshipData && <Internship />}
      {achievementData && <Achievement />}
 
    </section>
  );
}

export default Resume