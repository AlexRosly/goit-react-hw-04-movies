import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import {
  Container,
  StyledUl,
  StyledLink,
  StyledLi,
  Image,
  Wrapper,
  Title,
} from "./MovieList.styled";
import defaultImage from "../../images/default.jpg";

export const MovieList = ({ movies }) => {
  const location = useLocation();
  const imgURL = `https://image.tmdb.org/t/p/w342`;

  return (
    <Container>
      <StyledUl>
        {movies.map(
          ({ id, poster_path, title, release_date, vote_average }) => (
            <StyledLi key={id}>
              <StyledLink
                to={{
                  pathname: `movies/${id}`,
                  state: { from: location },
                }}
              >
                <div>
                  <Image
                    src={poster_path ? `${imgURL}${poster_path}` : defaultImage}
                    alt={title}
                  />
                  <Wrapper>
                    <Title>{title}</Title>
                  </Wrapper>
                </div>
              </StyledLink>
            </StyledLi>
          )
        )}
      </StyledUl>
    </Container>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
    })
  ),
};
