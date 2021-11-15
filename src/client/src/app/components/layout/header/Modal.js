import React from "react";
import { NavLink, useHistory} from "react-router-dom";
import * as Routes from '../../../routes';

const Modal = ({className}) => {
  const history = useHistory();

  return (
    <div className={className}>
      <div><span>✕</span></div>
      <ul>
        <NavLink exact to={Routes.Edit_Profile} ><li>Edit Profile</li></NavLink>
        <NavLink exact to={Routes.Reset_Pass}><li>Reset Password</li></NavLink>
        <li 
          onClick={() => {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            window.location.reload();
            history.push("/login");
            } 
          }>
            Logout
        </li>
      </ul>
    </div>
  )
}

export default Modal;
