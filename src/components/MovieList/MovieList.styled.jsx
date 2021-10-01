import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
`;

export const StyledUl = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const StyledLi = styled.li`
  list-style-type: none;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Wrapper = styled.div`
  margin: 5px 20px;
`;

export const Title = styled.h3`
  margin-bottom: 0;
  margin-top: 0;
  font-size: 14px;
`;

export const Paragraf = styled.p`
  margin-bottom: 0;
  margin-top: 0;
`;
