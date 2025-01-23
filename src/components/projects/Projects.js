import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, projectFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="ONLINE ADMISSION FORM"
          des="Online School Admission Form is a back-end program that allows users to fill out an admission form online."
          src={projectOne}
          githubLink="https://github.com/MISHRAJI03/OnlineForm"
        />
        <ProjectsCard
          title="Conference Website"
          des="Website for a conference, where users can register, view the schedule, and see the speakers."
          src={projectTwo}
          githubLink="https://samim6563.github.io/Conf_Web/"
        />
        <ProjectsCard
          title="Weather App"
          des="Website for checking the weather in different cities"
          src={projectThree}
          githubLink="https://mishraji03.github.io/index/"
        />
        <ProjectsCard
          title="Portfolio Website"
          des="Website using HTML, CSS, and JavaScript with a responsive design."
          src={projectFour}
          githubLink="https://mishraji03.github.io/Portfolio/"
        />
      </div>
    </section>
  );
}

export default Projects;