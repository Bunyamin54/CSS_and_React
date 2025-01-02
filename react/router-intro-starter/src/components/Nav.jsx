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
        <Link to ="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Nav;
