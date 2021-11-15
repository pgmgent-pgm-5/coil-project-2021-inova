import React from 'react'
import {useFormik} from 'formik';
import * as YUP from 'yup';
import StyledInput from '../Input/StyledInput.style';
import StyledButton from '../Button/StyledButton.style';
import {useHistory} from "react-router-dom";
import MySelect from './MySelect'
import {useMutation} from'@apollo/client';
import {CREATE_EVENT_MUTATION} from '../../GraphQl/Mutations'


const CreateEvent = ({className}) => {
  const [createEvent, {error}] = useMutation(CREATE_EVENT_MUTATION);
  const history = useHistory();
  const formik = useFormik({
    initialValues:{
      evTitle: "",
      evSelect:[],
    },
    validationSchema: YUP.object({
      evTitle: YUP.string().min(2, "Title must contain minimum 2 characters ").required("Title is required"),
      evSelect: YUP.array()
      .min(1, 'Pick at least 1 members')
      .of(
        YUP.object().shape({
          id: YUP.string().required(),
          name: YUP.string().required(),
        })
      ),
    }),
    onSubmit: (values) => {
      const userIds = values.evSelect.map(e => ({ userId: e.id}));
      createEvent({
        variables: {
          name: values.evTitle,
          userIds: userIds,
        }
      })
      if (error) {
        console.log(error);
      }else{

        history.push("/my-events");
        window.location.reload();
      }

    },
  });

  const handleSelection = (items) => {
    formik.setFieldValue('evSelect', items);
    // formik.handleChange('evSelect');
  }

  return (
    <div className={className}>
      <div>
        <h2>Create Event</h2>
        <form onSubmit={formik.handleSubmit}>
          <StyledInput 
            id="evTitle"
            name="evTitle"
            text="Title" 
            type="text"  
            onChange={formik.handleChange} 
            onBlur = {formik.handleBlur}
            value={formik.values.evTitle}  
          />
          {formik.touched.evTitle && formik.errors.evTitle ? <p className="error">{formik.errors.evTitle}</p> : null}
          <MySelect 
            name = "evSelect"
            onChange={handleSelection}
            value={formik.values.evSelect}
          />
          < StyledButton 
            backgroundcolor="#725AC1" 
            width="100%" 
            type="submit" 
            text="Create"
            name="createEvent" 
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

export default CreateEvent;
