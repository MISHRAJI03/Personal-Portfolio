import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, projectFour, projectFive } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-5 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
        <ProjectsCard
          title="ONLINE ADMISSION FORM"
          des="A backend application system designed to facilitate online school admission processes, enabling users to submit their admission forms digitally with automated data management."
          src={projectOne}
          githubLink="https://github.com/MISHRAJI03/OnlineForm"
        />
        <ProjectsCard
          title="Conference Website"
          des="A comprehensive conference management platform featuring user registration, interactive event scheduling, and speaker profile showcases."
          src={projectTwo}
          liveLink="https://icscca-bbit.in"
        />
        <ProjectsCard
          title="Weather App"
          des="A dynamic weather forecasting application that provides real-time meteorological data and forecasts for cities worldwide."
          src={projectThree}
          githubLink="https://mishraji03.github.io/index/"
        />
        <ProjectsCard
          title="Portfolio Website"
          des="A responsive portfolio website crafted with HTML, CSS, and JavaScript, showcasing adaptive design principles across all devices."
          src={projectFour}
          githubLink="https://mishraji03.github.io/Portfolio/"
        />
        <ProjectsCard
          title="Secure College Website using MERN Stack"
          des="A comprehensive college management system developed as a final year project, engineered to fulfill NBA and NAAC accreditation requirements. This secure MERN stack application streamlines institutional processes while ensuring compliance with academic quality standards."
          src={projectFive}
          liveLink="https://bbit-campus.cloud"
        />
      </div>
    </section>
  );
}

export default Projects;