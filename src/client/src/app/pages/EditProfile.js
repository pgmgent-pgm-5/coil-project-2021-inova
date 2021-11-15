import React from 'react'
import { StyledForm, StyledEditProfile} from '../components';
import profile from "../images/profile.jpg";
const EditProfile = () => {
  return (
    <StyledForm>
    <img className="hero" src={profile} alt="register_image"/>
    <StyledEditProfile />
  </StyledForm>
  )
}

export default EditProfile;
