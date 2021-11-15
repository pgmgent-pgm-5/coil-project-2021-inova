import styled from "styled-components";
import Modal from "./Modal";

const StyledModal= styled(Modal)`
  width: 343px;
  background-color:#fff;
  border: 2px solid #725AC1;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.16);
  z-index: 1000;
  position: absolute;
  top: 128px;
  right:0;



 & div{
   display:flex;
   justify-content: flex-end;
   & span{
     padding-top: 1rem;
     padding-right: 1rem;
     font-size: 1.5rem;
    font-weight: bold;
    color:#725AC1;
    visibility: hidden;

   }
 }
 & ul{
    width: 311.4px;
     margin: 0 auto;
     padding: 0 1rem;
   & li{
     margin-bottom: 2rem;
     padding-bottom: 1rem;
     border-bottom: 1px solid #725AC1;
     color: #676767;
     font-size: 18px;
     font-weight: bold;
     cursor: pointer;

   }
 }
`;

export default StyledModal;