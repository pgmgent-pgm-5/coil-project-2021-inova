import React from 'react'
import { NavLink} from "react-router-dom";
import StyledListMembers from '../ListMembers/StyledListMembers.style.js' 

import { useQuery } from '@apollo/client';
import {GET_MY_EVENTS} from '../../GraphQl/Queries';

const Event = ({className}) => {
  const { loading, error, data } = useQuery(GET_MY_EVENTS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const result = data.getUserById.userHasEvent;
  return (
    <>
    {result.map(element => (
           <NavLink key={element.event.id} exact to={`/my_events/event/${element.event.id}`} >
           <li className={className}>
             <div><h2>{element.event.name}</h2></div>
             <StyledListMembers ev={element.event.id}/>
           </li>
         </NavLink>   
            ))}
    </>
    

  )
}

export default Event
