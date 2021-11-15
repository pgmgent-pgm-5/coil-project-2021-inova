import styled from "styled-components";
import Input from "./Input.js";

const StyledInput = styled(Input)`
  
  display: flex;
  flex-direction: column;
  align-items: start;
  & label{
    font-size: 18px;
    color: #717171;
    margin-bottom: .5rem;

  }
  & input{
    margin-bottom: .75rem;
    width: 100%;
    height:50px;
    padding: .5rem;
    outline: none;
    border: 2px solid #725AC1 ;
    border-radius: .5rem;
  }
`;
export default  StyledInput ;