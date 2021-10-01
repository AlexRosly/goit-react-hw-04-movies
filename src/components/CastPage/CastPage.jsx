import PropTypes from "prop-types";
import {
  StyledUl,
  Container,
  ImageCard,
  Name,
  Character,
  Item,
  Wrapper,
  Message,
} from "./CastPage.styled";
import defaultImage from "../../images/default.jpg";

export const CastPage = ({ movies, reqStatus }) => {
  const imgURL = `https://image.tmdb.org/t/p/w185`;
  return (
    <Container>
      {movies && (
        <StyledUl>
          {movies.map(({ id, name, profile_path, character }) => (
            <Item key={id}>
              <ImageCard
                src={profile_path ? `${imgURL}${profile_path}` : defaultImage}
                alt={name}
              />
              <Wrapper>
                <Name>{name}</Name>
                <Character>Character: {character}</Character>
              </Wrapper>
            </Item>
          ))}
        </StyledUl>
      )}
      {reqStatus === "rejected" && (
        <Message>We don't have any credits for this movie</Message>
      )}
    </Container>
  );
};

CastPage.defaultProps = {
  profile_path: defaultImage,
};

CastPage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  reqStatus: PropTypes.string.isRequired,
};
