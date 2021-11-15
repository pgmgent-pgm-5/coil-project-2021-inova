import styled from "styled-components";
import Info from "./Info";

const StyledInfo = styled(Info)`  
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h2{
    color:#424242;
    font-size: 18px;
    font-weight: bold;

    @media (min-width:767px){
      font-size: 32px;
    }
  }

  & h4{
    color:#717171;
    font-size: 16px;
    font-weight: bold;
    @media (min-width:767px){
      font-size: 18px;
    }
  }



`;
export default StyledInfo;