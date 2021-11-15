import React from 'react'
//import Select from "react-select"
import { Multiselect } from 'multiselect-react-dropdown';
import {useQuery } from "@apollo/client"
import {GET_ALL_USERS} from '../../GraphQl/Queries'
import {GET_PROFILE_QUERY} from '../../GraphQl/Queries'

const MySelect = ({  name, onChange }) => {
  const {data} = useQuery(GET_ALL_USERS);
  const result = useQuery(GET_PROFILE_QUERY)
  console.log(result);
  let members = []
  let preselectedUsers = [];
  data && data.getAllUsers.forEach(item => {
    members.push({id: `${item.id}`, name: `${item.profile.firstName} ${item.profile.lastName}`}) 
  })
  if(result && result.data){
    const userInfo = result.data.getUserById;
    preselectedUsers.push({ id: userInfo.id, name: `${userInfo.profile.firstName} ${userInfo.profile.lastName}`})
  }

  return (
    <div>
      <label className="mutiselect-label">Add members</label>

      <Multiselect        
        name={name}
        onRemove={onChange}
        onSelect={onChange}
        options={members}
        displayValue="name"
        selectedValues={preselectedUsers}
      />
    </div>
  )
}

export default MySelect


