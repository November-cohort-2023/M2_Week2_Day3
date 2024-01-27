import React from 'react'
import { useParams } from 'react-router-dom'

function ProjectDetails(props) {
    // useParams() is what i Use to get my dynamic parameter
    const { something } = useParams()
    console.log(something)

    let foundProject = props.projects.find((oneProject) => {
        return oneProject._id === something
    })

    console.log(foundProject)
    return (
        <div>
            <h2>Project Details</h2>
            {!foundProject && <h4>No Found Project</h4>}
            {foundProject && (
                <div>
                    <h1>{foundProject.name}</h1>
                    <p>{foundProject.technologies}</p>
                    <p>{foundProject.year}</p>
                </div>

              )}
        </div>)
                
}

export default ProjectDetails