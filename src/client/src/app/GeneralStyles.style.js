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
html{
  scroll-behavior: smooth;
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
.nav_wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  & a{
    margin-bottom: .5rem;
    color:#725AC1;
    font-weight: bold;
    transition: all .3s ease-in-out  ;
    &:hover{
    opacity: .8;
  }
  }
}

article{
  & h1{
    color:#725AC1;
    font-size: 1.8rem;
  }
  & h2{
    color:#725AC1;
    font-size: 1.5rem;
    opacity: .8;
  }
  & h3{
    color:#725AC1;
    font-size: 1.25rem;
    opacity: .7;
  }

  & h4{
    color:#717171;
    font-size: 1rem;

  }
} 

article{
  border: 4px solid #725AC1;
  padding: 2rem 1rem;
  border-radius: .5rem;
  margin: 2rem 0;
  & .crt{
    border-radius: .5rem;
  padding: 2rem 1rem;
  box-shadow: 4px 8px 16px rgba(0, 0, 0, .4);
  margin-bottom: 2rem;
  }

}

article li{
margin: 1rem 0;
}
article ul, ol{
  padding-left: 1.25rem;
}

.note{
  border: 2px solid #725AC1;
  padding:  .5rem;
  border-radius: .5rem;
  text-align: center;
  background-color: #f2f2f2;
  margin: .5rem 0;
  width: 100%;
}
.list_help{
  padding: 0 1rem;
  & div {
    margin: .5rem 0;
  }
}

.help_exp, .help_info{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  & img{
    width: 100%;
    border: 2px solid #725AC1;
  }
  & ol, ul, p{
    width:100%;
  }
  @media (min-width:767px){
    & .sm{
    width: 25%;
  }
  & .xl{
    width: 45%;
  }
  & ol, ul, p{
    width:50%;
  }
  }
}
.list_ex{
  list-style: disc;
  padding-left: 1.25rem;
}
.to-top{
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color:#725AC1;
  border-radius: .5rem;
  height: 4rem;
  width: 4rem;
  color:#fff;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: .7;
}
`;