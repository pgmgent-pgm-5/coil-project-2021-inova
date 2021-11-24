import React from 'react'
import { Route, Redirect } from "react-router-dom";
import * as Routes from '../../routes';

const PrivateRoute = ({component:Component, ...rest}) => {
  const token = localStorage.getItem('token');
  return (
    <Route {...rest} render={(props) =>{
      if(token) return <Component {...props} />
      if(!token) return <Redirect to ={Routes.AUTH_LOGIN} />
    }}/>
      
  )
}

export default PrivateRoute; 
