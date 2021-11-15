import React from 'react'
import StyledMember  from '../../Member/StyledMember.style'

const Dues = ({className, text, color, amount, fullname, fname}) => {
  return (
    <li className={className}>
      <div>
        <StyledMember ml="0px" smsize='48px' bgsize='64px' fname={fname}/> 
        <h4>{fullname}</h4>
      </div>
      <h3>{text}</h3>
      <strong color={color}>{amount}</strong>

    </li>
  )
}

export default Dues
