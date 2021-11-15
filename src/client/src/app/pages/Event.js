import React, {useState} from 'react'
import { NavLink, useParams} from "react-router-dom";
import { AppContainer, HeaderStyled, StyledFooter } from '../components/layout'
import {StyledInfo, StyledSwitchers, StyledButton, StyledList, StyledDues} from '../components/'
import {useQuery, gql} from "@apollo/client";

const Event = () => {
  const [selected, setSelected] = useState('I owe')
  const userId = localStorage.getItem('userId');
  const { id } = useParams();
  const GET_DUES = gql `
  
query {
  getEventInfo(id:"${id}", userId: "${userId}"){
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
  
const { data} = useQuery(GET_DUES);  
console.log(data ? data : "empty");
// const oweMe = data.getEventInfo.oweMe;
//const oweThem = data.getEventInfo.oweThem;
// console.log(oweMe);
// console.log(oweThem);

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
  const { loading:loadExp, error:errExp, data:all } = useQuery(GET_ALL_EXPENSES);  
  if (loadExp) {return 'Loading...'}
  if (errExp) {return `Error! ${errExp.message}`}
  const allExp = all.getAllExpences;


  return (
    <AppContainer>
      <HeaderStyled/>
      < StyledInfo eventId={id}/>
      
      <StyledSwitchers setSelected={setSelected}  />
      {selected === 'I owe' && data ? <StyledList>
        {
          data.getEventInfo.oweThem.map((element , index) => (
            <StyledDues key={index} fname={element.firstName} fullname={`${element.firstName} ${element.lastName}`} text="" color="#FF4F4B" amount={`$ ${element.sum},00`}/>
          ))
        }
        
      </StyledList> : ''}

      {selected === 'Owed to me' && data ? <StyledList>
        {
          data.getEventInfo.oweMe.map((element , index) => (
            <StyledDues key={index} fname={element.firstName} fullname={`${element.firstName} ${element.lastName}`} text="" color="#55AB55" amount={`$ ${element.sum},00`}/>
          ))
        }
        
      </StyledList> : ''}

      {selected === 'All expenses' && allExp ? <StyledList>
        {
          allExp.map((element,index) => (
            <StyledDues key={index} fname={element.userEvent.user.profile.firstName} text={element.name} fullname={`${element.userEvent.user.profile.firstName} ${element.userEvent.user.profile.lastName}`} color="#424242" amount={`$ ${element.sum},00`}/>
        ))}
      </StyledList> : "" }

      <NavLink to = {`/event/expense/${id}`}>
      < StyledButton backgroundcolor="#725AC1" width="327px" text="Add Expense"/>
    </NavLink>
    <StyledFooter visible="visible"/>
    </AppContainer>
  )
}

export default Event
