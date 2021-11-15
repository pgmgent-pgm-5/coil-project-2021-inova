import React from 'react'
import {useFormik} from 'formik';
import * as YUP from 'yup';
import { NavLink, useHistory } from "react-router-dom";


import * as Routes from '../../routes';
import StyledInput from '../Input/StyledInput.style';
import StyledButton from '../Button/StyledButton.style';
import help from '../../images/help.svg';
import {CREATE_USER_MUTATION} from "../../GraphQl/Mutations"
import {useMutation} from "@apollo/client"


const Register = ({className}) => {
  const history = useHistory();
  const [createUser, {error}] = useMutation(CREATE_USER_MUTATION);
  const formik = useFormik({
    initialValues:{
      regFname: "",
      regLname:"",
      regEmail:"",
      regPass:"",
      repeatRegPass:"",
    },
    validationSchema: YUP.object({

      regFname:YUP.string()
      .min(2, "First Name must contain minimum 2 characters ")
      .max(30, "First Name must contain less than 30 characters ")
      .required("First Name is required"),
      
      
      regLname:YUP.string()
      .min(2, "Last Name must contain minimum 2 characters ")
      .max(30, "Last Name must contain less than 30 characters ")
      .required("Last Name is required"),
     
      regEmail: YUP.string().email("Inavalid email address ").required("Email is required"),
     
      regPass: YUP.string()
      .min(6, "Password must contain between 6 and 12 characters ")
      .max(12, "Password must contain between 6 and 12 characters")
      .required("Password is required"),
      repeatRegPass: YUP.string().oneOf([YUP.ref('regPass'), null], 'Passwords must match'),
     }),
    onSubmit: (values) => {
      createUser({
        variables: {
          // file: values.regAvatar,
          firstName: values.regFname,
          lastName: values.regLname,
          email: values.regEmail,
          password: values.regPass
        }
      })
      if (error) {
        console.log(error);
      }else{
        history.push("/login");
      }
    },
  });
  return (
    <div className={className}>
      <div className="wrap">
        <div className="topic">
        <h2>Register</h2>
        <NavLink className="q" exact to={Routes.HELP}><img className="question" src={help} alt="icon question"/></NavLink>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <StyledInput 
            id="regFname"
            name="regFname"
            text="First Name" 
            type="text"  
            onChange={formik.handleChange} 
            onBlur = {formik.handleBlur}
            value={formik.values.regFname}  
          />
          {formik.touched.regFname && formik.errors.regFname ? <p className="error">{formik.errors.regFname}</p> : null}
          <StyledInput
            id="regLname" 
            name="regLname"  
            text="Last Name" 
            type="text" 
            onChange={formik.handleChange}
            onBlur = {formik.handleBlur} 
            value={formik.values.regLname}  
          />
          {formik.touched.regLname && formik.errors.regLname ? <p className="error">{formik.errors.regLname}</p> : null}
          <StyledInput
            id="regEmail" 
            name="regEmail"  
            text="Email" 
            type="email" 
            
            onChange={formik.handleChange}
            onBlur = {formik.handleBlur} 
            value={formik.values.regEmail}  
          />
          {formik.touched.regEmail && formik.errors.regEmail ? <p className="error">{formik.errors.regEmail}</p> : null}
          <StyledInput 
            id="regPass"
            name="regPass"
            text="Password" 
            type="password"  
            onChange={formik.handleChange} 
            onBlur = {formik.handleBlur}
            value={formik.values.regPass}  
          />
          {formik.touched.regPass && formik.errors.regPass ? <p className="error">{formik.errors.regPass}</p> : null}
          <StyledInput
            id="repeatRegPass" 
            name="repeatRegPass"  
            text="Repeat password" 
            type="password" 
            onChange={formik.handleChange}
            onBlur = {formik.handleBlur} 
            value={formik.values.repeatRegPass}  
          />
          {formik.touched.repeatRegPass && formik.errors.repeatRegPass ? <p className="error">{formik.errors.repeatRegPass}</p> : null}
          < StyledButton 
            backgroundcolor="#725AC1" 
            width="100%" 
            type="submit" 
            text="Creat Account" 
            name="createAccount"
          />
          <p className="switch">Already have account? <NavLink exact to ={Routes.AUTH_LOGIN}>Login</NavLink></p>
        </form>

    </div>
  </div>

  )
}

export default Register;
