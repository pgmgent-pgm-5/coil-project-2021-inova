import styled from "styled-components";
import Form from "./Form.js";

const StyledLogin = styled(Form)`

display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
width: 100%;

& .hero {
  display: none;
  @media (min-width:1023px){
    display: block;
    width: 65%;
    object-fit: cover;

  }
}
& div{
  width: 100%;
  @media (min-width:1023px) {
    width: 35%;
  }
}



`;
export default StyledLogin;