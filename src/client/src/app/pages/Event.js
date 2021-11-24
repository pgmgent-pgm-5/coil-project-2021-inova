import React, {useState} from 'react'
import { NavLink, useParams} from "react-router-dom";
import { AppContainer, HeaderStyled, StyledFooter } from '../components/layout'
import {StyledInfo, StyledSwitchers, StyledButton, StyledList, StyledDues} from '../components/'
import {useQuery, gql} from "@apollo/client";

const Event = () => {
  const [selected, setSelected] = useState('I owe')
  const { id } = useParams();
  const GET_DUES = gql `
  
query {
  getEventInfo(id:"${id}"){
    id
    name
    oweMe{
      firstName
      lastName
      
      sum
    }
    oweThem{
      firstName
      lastName
      sum
    }
    totalContribute
  }
}
`;
const { data} = useQuery(GET_DUES, {
  fetchPolicy: "network-only"
});  
  const GET_ALL_EXPENSES = gql`
  query {
    getAllExpences(eventId: "${id}"){
      name
      sum
      userEvent{
        id
        user {
          profile {
            firstName
            lastName
          }
        }
      }
    }
  }
  `;
  const { loading:loadExp, error:errExp, data:all } = useQuery(GET_ALL_EXPENSES, {
    fetchPolicy: "network-only"
  });  
  if (loadExp) {return 'Loading...'}
  if (errExp) {return `Error! ${errExp.message}`}
  const allExp = all.getAllExpences;


  return (
    <AppContainer>
      <HeaderStyled/>
      <StyledInfo eventId={id}/>
      
      <StyledSwitchers setSelected={setSelected}  />
      <StyledList>
        {selected === 'Owed to me' && data ? 
          (data.getEventInfo.oweMe.map((element , index) => (
            <StyledDues key={index} fname={element.firstName} fullname={`${element.firstName} ${element.lastName}`} text="" color="#55AB55" amount={`$ ${element.sum},00`}/>
          ))):""}
          {selected === 'All expenses' && allExp ? 
          (allExp.map((element,index) => (
            <StyledDues key={index} fname={element.userEvent.user.profile.firstName} text={element.name} fullname={`${element.userEvent.user.profile.firstName} ${element.userEvent.user.profile.lastName}`} color="#424242" amount={`$ ${element.sum},00`}/>
          ))):""}
          {selected === 'I owe' && data ?           
          (data.getEventInfo.oweThem.map((element , index) => (
            <StyledDues key={index} fname={element.firstName} fullname={`${element.firstName} ${element.lastName}`} text="" color="#FF4F4B" amount={`$ ${element.sum},00`}/>
          ))):""}

      </StyledList> 
      <NavLink to = {`/event/expense/${id}`}>
      < StyledButton backgroundcolor="#725AC1" width="327px" text="Add Expense"/>
    </NavLink>
    <StyledFooter visible="visible"/>
    </AppContainer>
  )
}

export default Event
