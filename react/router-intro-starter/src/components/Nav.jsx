import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="bg-warning">
      <li>
        <Link to href="/">Home</Link>
      </li>
      <li>
        <NavLink to="/instructors">Instructors</NavLink>
      </li>
      <li>
        <NavLink to ="/contact">Contact</NavLink>
      </li>
    </ul>
  );
};

export default Nav;
