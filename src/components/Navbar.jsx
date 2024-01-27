import {Link,NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='/support'>Support Us</NavLink>
      </ul>
    </nav>
  );
}
 
export default Navbar;