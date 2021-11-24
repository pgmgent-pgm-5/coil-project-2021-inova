import React from 'react'
import {useFormik} from 'formik';
import * as YUP from 'yup';
import StyledInput from '../Input/StyledInput.style';
import StyledButton from '../Button/StyledButton.style';
import {useHistory} from "react-router-dom";

import {RESET_PASS_MUTATION} from "../../GraphQl/Mutations"
import {useMutation, useQuery} from "@apollo/client"
import {GET_PROFILE_QUERY} from '../../GraphQl/Queries'


const Password = ({className}) => {
  const history = useHistory();
  const {data:pro} = useQuery(GET_PROFILE_QUERY);
  const [updateUser] = useMutation(RESET_PASS_MUTATION,{
    onCompleted: () => {
      localStorage.removeItem('token');
      history.push("/login");
    },
    onError: (error) => {
      console.log(error);
    }
  });
  const formik = useFormik({
    initialValues:{
      editEmail: `${pro ? pro.getUserById.email : ""}`,
      editPassword: "",
      repeatPassword:"",
    },
    validationSchema: YUP.object({
      editPassword: YUP.string().min(6, "Password must contain between 6 and 12 characters ").max(12, "Password must contain between 6 and 12 characters").required("Password is required"),
      repeatPassword: YUP.string()
        .oneOf([YUP.ref('editPassword'), null], 'Passwords must match')
    }),
    onSubmit: (values) => {
      updateUser({
        variables: {
          email: values.editEmail,
          password: values.editPassword
        }
      })
    },
  });
  return (
    <div className={className}>
      <div>
        <h2>Reset Password</h2>
        <form onSubmit={formik.handleSubmit}>
        <StyledInput
            id="editEmail" 
            name="editEmail"  
            text="" 
            type="hidden"
            onChange={formik.handleChange} 
            onBlur = {formik.handleBlur} 
            value={formik.values.editEmail}  
          />
          <StyledInput 
            id="editPassword"
            name="editPassword"
            text="New password" 
            type="password"  
            onChange={formik.handleChange} 
            onBlur = {formik.handleBlur}
            value={formik.values.editPassword}  
          />
          {formik.touched.editPassword && formik.errors.editPassword ? <p className="error">{formik.errors.editPassword}</p> : null}
          <StyledInput
            id="repeatPassword" 
            name="repeatPassword"  
            text="Repeat new password" 
            type="password" 
            onChange={formik.handleChange}
            onBlur = {formik.handleBlur} 
            value={formik.values.repeatPassword}  
          />
          {formik.touched.repeatPassword && formik.errors.repeatPassword ? <p className="error">{formik.errors.repeatPassword}</p> : null}
          < StyledButton 
            backgroundcolor="#725AC1" 
            width="100%" 
            type="submit" 
            text="Reset Password"
          />
          < StyledButton 
            backgroundcolor="#FF4F4B" 
            width="100%" 
            type="button" 
            text="Cancel"
            onClick={() => history.goBack()}
          />
        </form>
    </div>
  </div>

  )
}

export default Password;
