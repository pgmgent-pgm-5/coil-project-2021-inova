import React, {useState} from 'react'
import {useFormik} from 'formik';
import * as YUP from 'yup';
import { NavLink, useHistory} from "react-router-dom";
import * as Routes from '../../routes';
import StyledInput from '../Input/StyledInput.style';
import StyledButton from '../Button/StyledButton.style';
import help from '../../images/help.svg';
import {LOGIN_MUTATION} from "../../GraphQl/Mutations"
import {useMutation} from "@apollo/client"

const Login = ({className}) => {
  const history = useHistory();
  const [responseError, setResponseError] = useState('');
  const [login] = useMutation(LOGIN_MUTATION,{
    onCompleted: (data) => {
      const result = data; 
      const token = result.login.access_token;
      localStorage.setItem('token', token);
      history.push("/my_events");
    },
    onError: (error) => {
      console.log(error);
      setResponseError(error.message) // the error if that is the case
    }
  });
  const formik = useFormik({
    initialValues:{
      loginEmail: "",
      loginPass:"",
    },
    validationSchema: YUP.object({
      loginEmail: YUP.string().email("Inavalid email address ").required("Email is required"),
      loginPass: YUP.string().min(6, "Password must contain between 6 and 12 characters ").max(12, "Password must contain between 6 and 12 characters").required("Password is required")
    }),
    onSubmit: (values) => {
      login({
        variables: {
          email: values.loginEmail,
          password: values.loginPass
        }
      });
    },
  });
  return (
    <div className={className}>
      <div>
        <div className="topic">
        <h2>Login</h2>
        <NavLink className="q" exact to={Routes.HELP}><img className="question" src={help} alt="icon question"/></NavLink>
        </div>
        
        {responseError && <p className="error">{responseError}</p>}
        <form onSubmit={formik.handleSubmit}>
          <StyledInput 
            id="email"
            name="loginEmail"
            text="Email" 
            type="email"  
            onChange={formik.handleChange} 
            onBlur = {formik.handleBlur}
            value={formik.values.loginEmail}  
          />
          {formik.touched.loginEmail && formik.errors.loginEmail ? <p className="error">{formik.errors.loginEmail}</p> : null}
          <StyledInput
            id="password" 
            name="loginPass"  
            text="Password" 
            type="password" 
            onChange={formik.handleChange}
            onBlur = {formik.handleBlur} 
            value={formik.values.loginPass}  
          />
          
          {formik.touched.loginPass && formik.errors.loginPass ? <p className="error">{formik.errors.loginPass}</p> : null}
          < StyledButton 
            backgroundcolor="#725AC1" 
            width="100%" 
            type="submit" 
            text="Login"
            name="login"
          />
        </form>
        <p className="switch">Don't have an account? <NavLink exact to ={Routes.AUTH_REGISTER}>Register</NavLink></p>
    </div>
  </div>

  )
}

export default Login;
