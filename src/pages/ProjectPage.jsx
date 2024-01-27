import { Link } from "react-router-dom";

 
function ProjectsPage (props) {
  return (
    <div>
      <h2>Projects</h2>
      {props.projects.map((project) => {
        return (
          <div key={project._id} className="project">
            <h3>{project.name}</h3>
            <p>{project.technologies}</p>
            <Link to={`/projects/${project._id}`}>Go To Project Page</Link>
          </div>
        );
      })}
    </div>
  );
}
 
export default ProjectsPage;