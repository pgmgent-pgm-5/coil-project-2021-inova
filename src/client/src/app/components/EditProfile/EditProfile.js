import React from 'react'
import {useFormik} from 'formik';
import * as YUP from 'yup';
import { NavLink} from "react-router-dom";
import * as Routes from '../../routes';
import StyledInput from '../Input/StyledInput.style';
import StyledButton from '../Button/StyledButton.style';
import help from '../../images/help.svg';
import {useHistory} from "react-router-dom";
import {UPDATE_PROFILE_MUTATION} from "../../GraphQl/Mutations"
import {useMutation, useQuery } from "@apollo/client"
import {GET_PROFILE_QUERY} from '../../GraphQl/Queries'



const EditProfile = ({className}) => {
  const history = useHistory();

  const [updateUser, {error}] = useMutation(UPDATE_PROFILE_MUTATION);
  const {data} = useQuery(GET_PROFILE_QUERY);



  const formik = useFormik({
    initialValues:{
      editFname: `${data ? data.getUserById.profile.firstName : ""}`,
      editLname: `${data ? data.getUserById.profile.lastName : ""}`,
      editEmail: `${data ? data.getUserById.email : ""}`,
      editPass : ""
    },
    enableReinitialize: true,
    validationSchema: YUP.object({
      editFname:YUP.string().min(2, "First Name must contain minimum 2 characters ").max(30, "First Name must contain less than 30 characters "),
      editLname:YUP.string().min(2, "Last Name must contain minimum 2 characters ").max(30, "Last Name must contain less than 30 characters "),
      editEmail: YUP.string().email("Inavalid email address "),
      editPass: YUP.string().min(6, "Password must contain between 6 and 12 characters ").max(12, "Password must contain between 6 and 12 characters").required("Password is required"),
    }),
    onSubmit: (values) => {
      data && updateUser({
        variables: {
          firstName: values.editFname,
          lastName: values.editLname,
          email: values.editEmail,
          password: values.editPass
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
      <div>
        <h2>Edit Profile</h2>
        <form onSubmit={formik.handleSubmit}>
          <StyledInput 
            id="editFname"
            name="editFname"
            text="First Name" 
            type="text"  
            onChange={formik.handleChange}
            onBlur = {formik.handleBlur}
            value={formik.values.editFname}  
          />
          {formik.touched.editFname && formik.errors.editFname ? <p className="error">{formik.errors.editFname}</p> : null}
          <StyledInput
            id="editLname" 
            name="editLname"  
            text="Last Name" 
            type="text" 
            onChange={formik.handleChange}
            onBlur = {formik.handleBlur} 
            value={formik.values.editLname}  
          />
          {formik.touched.editLname && formik.errors.editLname ? <p className="error">{formik.errors.editLname}</p> : null}
          <StyledInput
            id="editEmail" 
            name="editEmail"  
            text="Email" 
            type="email" 
            onChange={formik.handleChange}
            onBlur = {formik.handleBlur} 
            value={formik.values.editEmail}  
          />
          {formik.touched.editEmail && formik.errors.editEmail ? <p className="error">{formik.errors.editEmail}</p> : null}
          <StyledInput 
            id="editPass"
            name="editPass"
            text="Password" 
            type="password"  
            onChange={formik.handleChange} 
            onBlur = {formik.handleBlur}
            value={formik.values.editPass}  
          />
          {formik.touched.editPass && formik.errors.editPass ? <p className="error">{formik.errors.editPass}</p> : null}
          < StyledButton 
            backgroundcolor="#725AC1" 
            width="100%" 
            type="submit" 
            text="Update Profile" 
            name="editProfile"
          />
          < StyledButton 
            backgroundcolor="#FF4F4B" 
            width="100%" 
            type="button" 
            text="Cancel"
            onClick={() => history.goBack()}
          />
        </form>
        <NavLink exact to={Routes.HELP}><img src={help} alt="icon question"/></NavLink>
    </div>
  </div>

  )
}

export default EditProfile;
