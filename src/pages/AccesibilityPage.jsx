import { Link } from "react-router-dom"
import Navbar from "../component/navbar"

function AccesibilityPage () {

  return (
    <>
      <Navbar />
      <h1>Accesibility Page</h1>
        <Link to={"/projects/Typography"}>Accesibility</Link>

    </>
  )


}

export default AccesibilityPage