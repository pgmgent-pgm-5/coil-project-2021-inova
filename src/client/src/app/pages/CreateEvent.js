import React from 'react'
import { StyledForm, StyledCreateEvent} from '../components';
import evCreate from "../images/evCreate.jpg";
const CreateEvent = () => {
  return (
    <StyledForm>
    <img className="hero" src={evCreate} alt="register_image"/>
    <StyledCreateEvent />
    </StyledForm>
  )
}

export default CreateEvent
