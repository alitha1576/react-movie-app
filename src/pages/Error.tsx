import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";

export default function Error() {
  const location = useLocation();
  return (
    <div id="error-page">
      <br />
      <h1> Oops, where's this page?</h1>
      <br />
      <p>
        It looks like the page <code>"{location.pathname}"</code> you're looking
        for no longer exists or has been moved.
      </p>
      <p>
        Don't worry! Go back to the <NavLink to="/">homepage</NavLink> or try
        using the navigation menu.
      </p>
    </div>
  );
}
