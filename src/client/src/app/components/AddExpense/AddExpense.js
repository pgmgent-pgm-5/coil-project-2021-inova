import React from 'react'
import {useParams} from "react-router-dom";
import {useFormik} from 'formik';
import * as YUP from 'yup';
import StyledInput from '../Input/StyledInput.style';
import StyledButton from '../Button/StyledButton.style';
import {useHistory} from "react-router-dom";
import {CREATE_EXPENSE_MUTATION} from "../../GraphQl/Mutations"
import {useMutation} from "@apollo/client"

const AddExpense = ({className}) => {
  
  const { id } = useParams();
  const userId = localStorage.getItem('userId');
  console.log(userId);
  console.log(id);
  const [createExpence, {error}] = useMutation(CREATE_EXPENSE_MUTATION);
  const history = useHistory();
  const formik = useFormik({
    initialValues:{
      expTitle: "",
      expAmount:0,
    },
    validationSchema: YUP.object({
      expTitle: YUP.string().min(2, "Title must contain minimum 2 characters ").required("Title is required"),
      expAmount: YUP.number().min(1, "Amount must contain minimum 1 digit").required("Amount is requried")
    }),
    onSubmit: (values) => {
      createExpence({
        variables: {
        eventId:id,
        userId:userId,
        name:values.expTitle,
        sum: values.expAmount
        }
      })
      if (error) {
        console.log(error);
      }else{
        history.goBack()
      }
    },
  });
  return (
    <div className={className}>
      <div>
        <h2>Add Expense</h2>
        <form onSubmit={formik.handleSubmit}>
          <StyledInput 
            id="expTitle"
            name="expTitle"
            text="Title" 
            type="text"  
            onChange={formik.handleChange} 
            onBlur = {formik.handleBlur}
            value={formik.values.expTitle}  
          />
          {formik.touched.expTitle && formik.errors.expTitle ? <p className="error">{formik.errors.expTitle}</p> : null}
          <StyledInput
            id="expAmount" 
            name="expAmount"  
            text="Amount" 
            type="number" 
            onChange={formik.handleChange}
            onBlur = {formik.handleBlur} 
            value={formik.values.expAmount}  
          />
          {formik.touched.expAmount && formik.errors.expAmount ? <p className="error">{formik.errors.expAmount}</p> : null}
          < StyledButton 
            backgroundcolor="#725AC1" 
            width="100%" 
            type="submit" 
            text="Add Expense"
            name="addExpense" 
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

export default AddExpense;
