import {gql} from "@apollo/client"

export const CREATE_USER_MUTATION = gql`
  mutation createUser
  (
    $firstName:String! 
    $lastName:String! 
    $email:String! 
    $password:String!
  ) 
  {
    createUser
    (
      createUserInput : {
        email: $email 
        password: $password
      },
      createProfileInput: {
        firstName: $firstName 
        lastName: $lastName
      }
    ) 
    {
      id
      email
      password
      profile {
        firstName
        lastName
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
mutation login (
  $email:String! 
  $password:String!
){
  login(
    email: $email
    password: $password
    ) {
    id
    access_token,
}
  
}
`;

export const UPDATE_PROFILE_MUTATION = gql`

mutation updateUser(
  $firstName:String! 
  $lastName:String! 
  $email:String! 
  $password:String!
  ) {
  updateUser
  (
    updateUserInput: {
    email: $email
    password: $password
    profile: {
      firstName: $firstName
      lastName: $lastName
    }
  }){
    id
    email
    profile {
      firstName
      lastName
    }
  }
}
`;

export const RESET_PASS_MUTATION = gql`

mutation updateUser(
  $password: String! 
  $email: String!
  ) {
  updateUser
  (
    updateUserInput: {
      email: $email
    password: $password

  }){
    id
  }
}
`;

export const CREATE_EVENT_MUTATION = gql`
mutation createEvent(
  $name:String!
  $userIds: [CreateUserHasEventInput!]!
  ) {
   createEvent(
     createEventInput: {
      name: $name
      createUserHasEventInput: $userIds
   }){
    id
   name
   }
  }
`;

export const CREATE_EXPENSE_MUTATION = gql`

mutation createExpence(
  $name: String!
  $sum:Int!
  $eventId:String!
) {
  createExpence(
    createExpenceInput: {
    name: $name
    sum: $sum
    eventId: $eventId
  }){
    id
    name
    sum
  }
}

`;