import React from 'react';
import { StyledForm, StyledLogin} from '../components';
import login from "../images/login.jpg";


const Login = () => {
  return (
    <StyledForm>
      <img className="hero" src={login} alt="login_image"/>
      <StyledLogin />
    </StyledForm>
  )
}

export default Login;