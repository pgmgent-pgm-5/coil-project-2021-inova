import React from 'react'
import { Route, Redirect } from "react-router-dom";
import * as Routes from '../../routes';
let auth = false;
const token= localStorage.getItem('token');
const userId = localStorage.getItem('userId');
if (token && userId) {
  auth = true;
}
else {
  auth = false;
}
const PrivateRoute = ({component:Component, ...rest}) => {
  return (
    <Route {...rest} render={(props) =>{
      if(auth) return <Component {...props} />
      if(!auth) return <Redirect to ={Routes.AUTH_LOGIN} />
    }}/>
      
  )
}

export default PrivateRoute; 
