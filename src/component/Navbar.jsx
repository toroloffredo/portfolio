import { Link } from "react-router-dom"

function Navbar () {

  return (
    <>
      <nav id="navbar" className="nav">
      <ul className="nav-list">
      <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
        <li>
          <Link to={'/tech-sheet'}>Technical Sheet</Link>
        </li>
        
      </ul>
    </nav>
    </>
  )


}

export default Navbar