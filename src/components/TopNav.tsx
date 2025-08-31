import { NavLink } from 'react-router-dom';

export default function TopNav() {
  const getNavLinkClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'nav-item active' : 'nav-item';

  return (
    <nav className="topnav" aria-label="Primary">
      <NavLink to="/" end className={getNavLinkClassName}>
        Home
      </NavLink>
      <NavLink to="/about" className={getNavLinkClassName}>
        About
      </NavLink>
      <NavLink to="/projects" className={getNavLinkClassName}>
        Projects
      </NavLink>
      <NavLink to="/contact" className={getNavLinkClassName}>
        Contact
      </NavLink>
    </nav>
  );
}
