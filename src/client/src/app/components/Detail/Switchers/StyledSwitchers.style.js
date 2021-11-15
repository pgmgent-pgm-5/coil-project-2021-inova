import styled from "styled-components";
import Switchers from "./Switchers";

const StyledSwitchers = styled(Switchers)`
  display: block;
  margin: 0 auto;
  width: 100%;
& ul{
  display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
width: 100%;
padding: 0;

& .standard{
  width: 33.3333333333%;
  border-radius: ${(props) => props.radius };
  background-color:transparent;
  border: 1px solid #725AC1;
  color: #725AC1;
  text-align: center;
  font-weight: bold;
  padding: 10.5px 0 ;
  transition: all .1s ease-in-out;
  cursor: pointer;

  &:hover{
    background-color:#8E7BCD;
    color: #fff;
    border: 1px solid #8E7BCD;
  }
 

}
& .st1{
  border-radius: 8px 0 0 8px;
}
& .st3{
  border-radius: 0 8px 8px 0;
}
& .active{
    border-radius: ${(props) => props.radius };
    width: 33.3333333333%;
    background-color:#725AC1 !important;
    border: 1px solid #725AC1;
    color: #fff;
    text-align: center;
    font-weight: bold;
    padding: 10.5px 0 ;
    cursor: pointer;
  }


}
`;
export default StyledSwitchers;