import React from 'react'
import { StyledForm, StyledAddExpense} from '../components';
import exp from "../images/exp.jpg";
const AddExpense = () => {
  return (
    <StyledForm>
    <img className="hero" src={exp} alt="register_image"/>
    <StyledAddExpense />
  </StyledForm>
  )
}

export default AddExpense
