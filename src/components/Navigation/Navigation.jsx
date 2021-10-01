import { StyledNav } from "./Navigation.styled";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <StyledNav>
    <NavLink exact to="/" className="nav-link" activeClassName="nav-activelink">
      Home
    </NavLink>

    <NavLink to="/movies" className="nav-link" activeClassName="nav-activelink">
      Movies
    </NavLink>
  </StyledNav>
);

export default Navigation;
