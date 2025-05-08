import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="headerContainer">
      <NavLink to="/">
        <img src="./src/assets/logo.png" alt="logo" className="logo" />
      </NavLink>
      
      <nav>
        <NavLink to="/" >
          Home
        </NavLink>
        <NavLink to="/movies" >
          Movies
        </NavLink>
        <NavLink to="/series" >
          Series
        </NavLink>
      </nav>
    </div>
  );
}
