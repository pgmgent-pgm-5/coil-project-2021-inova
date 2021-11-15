import React from 'react'
import { format } from 'date-fns';
import { useQuery, gql } from '@apollo/client';


const Info = ({className, eventId}) => {
  const id = eventId;
  const GET_EVENT_TOPIC = gql`
  query{
    getEvent(id:"${id}"){
      id
      name
      createdAt
    }
  }
`;


  const { loading, error, data } = useQuery(GET_EVENT_TOPIC);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const result  = data.getEvent;
  return (
    <div className={className}>
      <h2>{result.name}</h2>
      <h4>{format(new Date(result.createdAt), 'yyyy-MM-dd')}</h4>
    </div>
  )
}

export default Info
