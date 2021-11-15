import React from 'react'

const Button = ({className, backgroundcolor, width="327px", text, type="button", name="", onClick=null}) => {
  return (
    <button className={className} backgroundcolor={backgroundcolor} width={width}  type={type} name={name} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
