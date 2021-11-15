import React from 'react'
import StyledMember from '../Member/StyledMember.style'
import {useQuery, gql} from "@apollo/client";


const ListMembers = ({className, ev}) => {
  const id = ev;
  const GET_MY_EVENTS_MEMBERS = gql `
  query{
    getEvent(id:"${id}"){
      userHasEvent {
        user{
          profile {
            firstName
            lastName
          }
        }
      }
    }
  }
`;

const { loading, error, data } = useQuery(GET_MY_EVENTS_MEMBERS);

if (loading) return 'Loading...';
if (error) return `Error! ${error.message}`;
  const result = data.getEvent.userHasEvent;
  return (
    <div className={className}>
      {result.map((element , index) => (
      <StyledMember key={index} title={`${element.user.profile.firstName} ${element.user.profile.lastName}`} ml="-8px" smsize='32px' bgsize='50px' fname={element.user.profile.firstName} />
      ))}
    </div>
  )
}

export default ListMembers
