import { Link } from "react-router-dom"
import Navbar from "../component/navbar"

function MagazinePage () {

  return (
    <>
      <Navbar />
      <h1>Magazine Page</h1>
        <Link to={"/projects/magazine"}>Magazine</Link>

    </>
  )


}

export default MagazinePage