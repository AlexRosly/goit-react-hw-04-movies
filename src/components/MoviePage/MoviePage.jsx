import {
  StyledCard,
  Title,
  StyledP,
  Text,
  StyledUl,
  StyledLi,
  StyledTitle,
} from "./MoviePage.styled";
import PropTypes from "prop-types";
import defaultImage from "../../images/default.jpg";

export const MoviePage = ({ movie }) => {
  const { title, poster_path, genres, vote_average, overview, original_title } =
    movie;
  const imgURL = `https://image.tmdb.org/t/p/w342${poster_path}`;
  const poster = poster_path ? imgURL : defaultImage;

  return (
    <>
      <StyledCard>
        <img src={poster} alt={title} />
        <div>
          <Title>{title}</Title>
          <StyledP>
            <Text>Vote:</Text> {vote_average}
          </StyledP>
          <StyledP>
            <Text>Original title:</Text> {original_title}
          </StyledP>
          <StyledP>
            <Text>Overview:</Text>
          </StyledP>
          <StyledP>{overview}</StyledP>
          <StyledUl>
            <Text>Genre:</Text>
            {genres.map(({ id, name }) => (
              <StyledLi key={id}>{name}</StyledLi>
            ))}
          </StyledUl>
        </div>
      </StyledCard>

      <StyledTitle>Additional infomation</StyledTitle>
    </>
  );
};

MoviePage.defaultProps = {
  posterPath: defaultImage,
};

MoviePage.propTypes = {
  movie: PropTypes.exact({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }),
};
