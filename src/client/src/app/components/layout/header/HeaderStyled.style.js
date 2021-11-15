import styled from "styled-components";
import Header from "./Header";

const HeaderStyled = styled(Header)`
  margin-bottom: 4rem;
  padding: 0;
  display:flex;
  justify-content: space-between;
  align-items: center;

  & div{
    width: 100px;
    height:86px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    & .avatar , img{
      width: 64px;
      height:64px;
      object-fit: cover;
      border-radius: 50%;
      border: 3px solid #725AC1;
    }
    & span{
      font-weight: bold;
      color:#424242;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: .8rem;
      margin-top: .2rem;
      & strong{
        color:#725AC1;
      }
    }
  }

`;

export default HeaderStyled;