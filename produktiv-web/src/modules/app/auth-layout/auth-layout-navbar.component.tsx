import { Link, NavLink } from "react-router";

export const AuthLayoutNavbar = () => {
  return (
    <nav style={{display: 'block'}}>
      {/* NavLink makes it easy to show active states */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        Home
      </NavLink>
      <NavLink to="/about">
        {({ isActive }) => (
          <span className={isActive ? "active" : ""}>
            {isActive ? "👉" : ""} Tasks
          </span>
        )}
      </NavLink>

      <Link to="/home">Home</Link>
    </nav>
  );
}