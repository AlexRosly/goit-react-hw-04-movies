import {
  StyledUl,
  Container,
  Author,
  Text,
  Message,
} from "./ReviewsPage.styled";
import PropTypes from "prop-types";
import React from "react";

export const ReviewsPage = ({ reviews, reqStatus }) => {
  return (
    <Container>
      {reviews && (
        <StyledUl>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <div>
                <Author>{author}</Author>
                <Text>{content}</Text>
              </div>
            </li>
          ))}
        </StyledUl>
      )}

      {reqStatus === "rejected" && (
        <Message>We don't have any reviews for this movie</Message>
      )}
    </Container>
  );
};

ReviewsPage.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
  reqStatus: PropTypes.string.isRequired,
};
