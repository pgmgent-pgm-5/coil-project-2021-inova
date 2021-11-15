import React from 'react'

const Form = ({className, children}) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Form;
