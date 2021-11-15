import React from 'react'
import { StyledForm, StyledRegister} from '../components';
import reg from "../images/reg.jpg";
const Register = () => {
  return (
    <StyledForm>
    <img className="hero" src={reg} alt="register_image"/>
    <StyledRegister />
  </StyledForm>
  )
}

export default Register;
