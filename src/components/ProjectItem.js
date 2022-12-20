import React from 'react'

function ProjectItem({ image, name, link, git }) {
  return (
    <div className='projectItem'>
        <div style={{backgroundImage: `url(${image})`}} className="bgImage" />
        <h1> {name} </h1>
        <a href={link} role="button" target='_blank' rel="noreferrer"><button>View Website</button></a>
        <a href={git} role="button" target='_blank' rel="noreferrer"><button>View Code</button></a>
    </div>
  )
}

export default ProjectItem