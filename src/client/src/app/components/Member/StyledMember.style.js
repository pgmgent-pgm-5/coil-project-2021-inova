import styled from "styled-components";
import Member from "./Member.js";

const StyledMember = styled(Member)`

width: 32px;
height: 32px;
border-radius:50%;
border: 2px solid #725AC1;
margin-left: ${(props) => props.ml };
width: ${(props) => props.smsize };
height: ${(props) => props.smsize };
@media (min-width:767px){
  height: ${(props) => props.bgsize };
  width: ${(props) => props.bgsize };
  border: 3px solid #725AC1;
}

& img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius:50%;
}




`;
export default StyledMember;