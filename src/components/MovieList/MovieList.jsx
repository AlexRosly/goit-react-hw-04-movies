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
  Paragraf,
} from "./MovieList.styled";

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
                  <Image src={`${imgURL}${poster_path}`} alt={title} />
                  <Wrapper>
                    <Title>{title}</Title>
                    <Paragraf>
                      {release_date.substring(0, 4)} |{" "}
                      <span>{vote_average}</span>
                    </Paragraf>
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
