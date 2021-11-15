import React from 'react'
import { NavLink} from "react-router-dom";

import {useHistory} from "react-router-dom";
import back from '../../../images/back.svg';
import help from '../../../images/help.svg';

import * as Routes from '../../../routes';




const Footer = ({className, visible}) => {
  const history = useHistory();
  return (
    <footer className={className}>
      <img  className="visibility" visible={visible} src={back} alt="icon go_back" onClick={() => history.goBack()}/>
      <NavLink exact to={Routes.HELP}><img src={help} alt="icon question"/></NavLink>
    </footer>

  )
}

export default Footer;
