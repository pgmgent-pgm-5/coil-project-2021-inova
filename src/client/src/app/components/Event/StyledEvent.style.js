import styled from "styled-components";
import Event from "./Event";

const StyledEvent = styled(Event)`
  border-radius: .5rem;
  padding: .5rem;
  box-shadow: 4px 8px 16px rgba(0, 0, 0, .4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
  border: 3px solid transparent;
  transition: all .3s ease-in-out; ;
  &:hover{
    border: 3px solid #725AC1;
  }


  & h2{
    color:#424242;
    font-weight: bold;
    font-size: 1rem;
     @media(min-width:767px){
       font-size: 1.25rem;
     }
  }


`;
export default StyledEvent;