import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import * as Routes from '../../../routes';
import { useQuery } from '@apollo/client';
import {GET_PROFILE_QUERY} from '../../../GraphQl/Queries'



import logo1 from "../../../images/logo.png"

import StyledModal from "./StyledModal.style"
const Header = ({className}) => { 

  
  const [showModal, setShowModal] = useState(false);
  const [arrow, setArrow] = useState("▼");
  const { loading, error, data } = useQuery(GET_PROFILE_QUERY);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const firstName = data.getUserById.profile.firstName;
  const lastName = data.getUserById.profile.lastName;
  const handleClick = () => {
    if(!showModal) {
      setShowModal(true);
      setArrow("▲");
    }
    else{
      setShowModal(false);
      setArrow("▼");
    }

  }
  return (
    <>
    <section className={className}>
     <NavLink exact to = {Routes.LANDING}><img src={logo1} width="74" height="68" alt="logo" /> </NavLink>
     {/* <div onClick={handleClick}><img src={Faker.image.avatar()} alt='avatar'/><span>Hello Joe <strong>{arrow}</strong></span></div> */}

     <div title={`${firstName} ${lastName}`} onClick={handleClick}><img src={`https://avatars.dicebear.com/api/bottts/:${firstName}.svg?scale=85&background=%23ffffff`} alt="avatar" className="avatar" /><span>Hello {firstName} <strong>{arrow}</strong></span></div>
     
    </section>
    {showModal && <StyledModal /> }
    </>
  )
}

export default Header;
