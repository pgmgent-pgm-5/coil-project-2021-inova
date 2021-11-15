import styled from "styled-components";
import Footer from "./Footer";

const StyledFooter = styled(Footer)`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between !important;
  align-items: center;
  height: 2rem;
  @media (min-width:767px){
    height: 3rem;
  }

    & .visibility{
      visibility: ${(props) => props.visible };
    }
    & img{
      width:2rem;
      height: 2rem;
      cursor: pointer;
      @media (min-width:767px){
      width: 3rem;
      height: 3rem;
    }
    }

`;

export default StyledFooter;
