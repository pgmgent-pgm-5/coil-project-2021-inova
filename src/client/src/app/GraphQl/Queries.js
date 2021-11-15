import {gql} from "@apollo/client"
const userId  = localStorage.getItem('userId');
export const GET_PROFILE_QUERY = gql `
query {
  getUserById(id: "${userId}"){
    id
    email
    profile {
      firstName
      lastName
    }
  }
}
`;

export const GET_ALL_USERS = gql `
query {
  getAllUsers {
    id
    email
    profile {
      firstName
      lastName
    }
  }
}
`;




export const GET_MY_EVENTS = gql`
query {
 getUserById(id:"${userId}"){
  userHasEvent {
  id
  event{
  id
  name
  }
  }
  }
  }

`;