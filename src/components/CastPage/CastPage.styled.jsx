import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
`;

export const StyledUl = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  border: rgba(0, 0, 0, 0.08) solid 1px;
  border-radius: 5px;
`;

export const ImageCard = styled.img`
  min-height: 175px;
  max-width: 185px;
  object-fit: cover;
`;

export const Wrapper = styled.div`
  padding: 5px 20px;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
`;

export const Character = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
`;

export const Message = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
