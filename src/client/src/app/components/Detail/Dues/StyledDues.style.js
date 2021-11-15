import styled from "styled-components";
import Dues from "./Dues";

const StyledDues = styled(Dues)`
  border-radius: .5rem;
  padding: .5rem 1rem;
  box-shadow: 2px 4px 16px rgba(0, 0, 0, .4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: bold;
  white-space: nowrap;

  & h3{
    color:#717171;
    font-size: 1rem;
  }

  @media (min-width:767px){
    
    font-size: 1.25rem;
    & h3{
    font-size: 1.25rem;
  }
  }

  & strong{
    color: ${(props) => props.color };
  }

  & div{
    display: flex;
    justify-content: center;
    align-items: center;

    & h4{
      margin-left: .5rem;
      color:#424242;
      @media (min-width:767px){
        margin-left: 2rem ;
      }
    }

  }
`;
export default StyledDues;