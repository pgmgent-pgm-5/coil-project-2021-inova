import {createGlobalStyle} from "styled-components";
import Lato_BoldWoff2 from '../fonts/Lato_Bold.woff2';
import Lato_BoldWoff from '../fonts/Lato_Bold.woff';
import Lato_RegularWoff2 from '../fonts/Lato_Regular.woff2';
import Lato_BRegularWoff from '../fonts/Lato_Regular.woff';


export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Lato';
    src: url(${Lato_BoldWoff2}),
        url(${Lato_BoldWoff});
    font-weight: 700;
}
@font-face {
    font-family: 'Lato';
    src: url(${Lato_RegularWoff2}),
        url(${Lato_BRegularWoff});
    font-weight: 400;
}

*{
  box-sizing: border-box;
}

body {

  margin: 0;
  font-family: 'Lato';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a{
  text-decoration: none;
  cursor: pointer;

}
ul{
  list-style: none;
}
.error{
  /* background-color:#FF4F4B;
  padding: 1rem;
  border-radius: .5rem;
  color:white;
  letter-spacing: 2px; */
  font-size: .85rem;
  margin-top: -.5rem;
  margin-bottom: 1rem;
  color:#ff4f4b;
}
.error_avatar{
  text-align: center;
}
.switch{
  margin: 0;
  padding: 0;
  margin-top: 1rem;
  color:#717171;
  font-weight: bold;
  & a{
    color:#424242;
    text-decoration: underline;
    margin-left: .25rem;
  }
}
.mutiselect-label{
  font-size: 18px;
    color: #717171;
}
.multiSelectContainer{
  & div{
    margin-top: .5rem !important;
    min-height:50px;
    padding: .5rem;
    outline: none;
    border: 2px solid #725AC1 ;
    border-radius: .5rem;
    & .chip{
      margin-top: .25rem;
      background: #725AC1 !important;
      color: #fff;
      border-radius: .5rem !important;
    }
  }
  & .optionListContainer{
    margin: 0;
    padding: 0;
  }
  .option{
    color:#725AC1;
    background: #fff;
    &:hover{
      background: #725AC1;
      color:#fff;
    }
  }
}

`;