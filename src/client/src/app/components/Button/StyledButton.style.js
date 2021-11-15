import styled from "styled-components";
import Button from "./Button";

const StyledButton = styled(Button)`
  width:${(props) => props.width};
  max-width: 100%;
  height:50px;
  color: #fff;
  font-weight: bold;
  border: none;
  outline: none;
  border-radius: .5rem;
  display: block;
  background-color: ${(props) => props.backgroundcolor };
  transition: all 0.3s ease-in-out;
  margin: 1.5rem auto 0;
  font-size: 1.25rem;
  text-decoration: none;
  cursor: pointer;

  &:hover{
    opacity: .8;
  }

`;
export default StyledButton;