import React from 'react';

const Input = ({className, text, type, id, name, onChange=null, onBlur=null, value}) => {

  return (
    <div className={className}>
       <label htmlFor={id}>{text}</label>
        <input type={type} id={id} name={name} onChange={onChange} onBlur={onBlur} value={value} />
    </div>
  )
}

export default Input
