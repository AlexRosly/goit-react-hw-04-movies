import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  /* margin-bottom: 30px; */
  height: 50px;
  background-color: #4d4d52;
`;

export const StyledNavLink = styled(NavLink)`
  margin-left: 50px;
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  color: white;
`;
