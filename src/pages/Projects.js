import React from 'react'
import ProjectItem from '../components/ProjectItem'
import '../components/styles/Projects.css'
import { projectList } from '../helpers/ProjectList'

function Projects() {
  return (
    <div className='projects'>
      <h1>My personal projects</h1>
      <div className='projectList'>
        {projectList.map((project) => {
        return <ProjectItem name={project.name} image={project.image} link={project.link} git={project.git} />;
        })}
      </div>
    </div>
  )
}

export default Projects