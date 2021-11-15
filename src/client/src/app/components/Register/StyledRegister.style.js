import styled from "styled-components";
import Register from "./Register.js";

const StyledRegister = styled(Register)`
  height: 100vh;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & div{
    margin: 0;
    padding: 0;
    width: 100%;
  & .topic {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & h2{
      font-size: 1.5rem;
      font-weight: bold;
      color:#424242;
    }
    & .q{
      & .question{
      width: 2rem;
      height: 2rem;
    }
    }
  }
  }


`;
export default StyledRegister;