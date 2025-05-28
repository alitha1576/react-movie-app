import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="headerContainer">
      <NavLink to="/">
        <div className="logo">
          <img src={logo} alt="logo" className="logo" />
          <span className="logoName">MovieApp</span>
        </div>
      </NavLink>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/series">Series</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/watchlist">Watchlist</NavLink>
        <NavLink to="/reviews">Reviews</NavLink>
      </nav>
    </div>
  );
}
