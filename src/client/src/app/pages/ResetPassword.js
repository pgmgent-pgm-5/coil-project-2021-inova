import React from 'react'
import { StyledForm, StyledPassword} from '../components';
import resPass from "../images/resPass.jpg";
const ResetPassword = () => {
  return (
    <StyledForm>
      <img className="hero" src={resPass} alt="reset_password_image"/>
      <StyledPassword />
    </StyledForm>
  )
}

export default ResetPassword
