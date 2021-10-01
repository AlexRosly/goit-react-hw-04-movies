import PropTypes from "prop-types";
import { Btn } from "./Button.styled";

export const Button = ({ onClick }) => {
  return (
    <>
      <Btn type="button" onClick={onClick}>
        Go back
      </Btn>
    </>
  );
};

Btn.propTypes = {
  onClick: PropTypes.func,
};
