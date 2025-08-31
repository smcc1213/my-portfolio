import { NavLink } from 'react-router-dom';

export default function TopNav() {
  return (
    <nav className="topnav" aria-label="Primary">
      <NavLink to="/" className="nav-item" end>
        Home
      </NavLink>
      <NavLink to="/about" className="nav-item">
        About
      </NavLink>
      <NavLink to="/projects" className="nav-item">
        Projects
      </NavLink>
      <NavLink to="/contact" className="nav-item">
        Contact
      </NavLink>
    </nav>
  );
}
