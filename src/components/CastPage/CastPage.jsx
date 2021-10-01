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

export const CastPage = ({ movies, reqStatus }) => {
  return (
    <Container>
      {movies && (
        <StyledUl>
          {movies.map(({ id, name, profile_path, character }) => (
            <Item key={id}>
              <ImageCard
                src={`https://image.tmdb.org/t/p/w185${profile_path}`}
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

CastPage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  reqStatus: PropTypes.string.isRequired,
};
