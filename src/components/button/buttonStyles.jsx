import styled from "styled-components";

const ButtonWrapper = styled.button`
  margin-left: ${({ ml }) => (ml ? ml + "px" : "")};;
  border: none;
  outline: none;
  color: #fff;
  width: ${({ width }) => (width ? width + "%" : "90%")};
  padding: 7px 1.5em;
  font-size: ${({ size }) => (size ? size + "px" : "18px")};
  font-weight: 700;
  border-radius: 3px;
  background-color: rgba(194, 148, 255, 1);
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: rgba(158, 95, 245, 1);
  }

  &:focus {
    outline: none;
  }
`;

export {ButtonWrapper};