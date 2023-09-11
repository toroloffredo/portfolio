import { Link } from "react-router-dom"
import Navbar from "../component/navbar"

function FormPage () {

  return (
    <>
      <Navbar />
      <h1>Form Page</h1>
        <Link to={"/projects/form"}>Form</Link>

    </>
  )


}

export default FormPage