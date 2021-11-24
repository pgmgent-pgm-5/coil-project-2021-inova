import {gql} from "@apollo/client";

export const GET_PROFILE_QUERY = gql `
query {
  getUserById{
    id
    email
    profile {
      id
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
      id
      firstName
      lastName
    }
  }
}
`;




export const GET_MY_EVENTS = gql`
query {
 getUserById{
   id
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
