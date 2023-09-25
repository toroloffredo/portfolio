import { Link } from "react-router-dom"
import Navbar from "../component/navbar"

function ProjectsPage () {

  return (
    <>
      <Navbar />
      <h1>Projects Page</h1>
        <div className= "project-list">
          <Link to={"/projects/magazine"}>Magazine</Link>
          <Link to={"/projects/Typography"}>Typography</Link>
          <Link to={"/projects/accesibility"}>Accesibility</Link>
          <Link to={"/projects/form"}>Form</Link>
        </div>
    </>
  )


}

export default ProjectsPage