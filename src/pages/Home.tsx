import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="homeContainer">
      <div>
        <NavLink to="/movies">
          <h2>Latest movies</h2>
        </NavLink>
      </div>
      <div>
        <NavLink to="/series">
          <h2>Latest series</h2>
        </NavLink>
      </div>
      <div>
        <h2>Latest reviews</h2>
      </div>
    </div>
  );
}
