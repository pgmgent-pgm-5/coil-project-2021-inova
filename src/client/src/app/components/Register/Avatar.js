import React ,{useRef}from 'react'
const Avatar = ({className, onChange, onBlur, src}) => {

  const fileRef = useRef(null);
  return (
    <div className={className}>
      <input 
        ref ={fileRef}
        hidden
        id="regAvatar"
        name="regAvatar"
        type="file"  
        onChange={onChange} 
        onBlur = {onBlur}
          
      />
      <div onClick={()=>{fileRef.current.click()}}><img src={src} alt="avatar_icon"/></div>
    </div>
  )
}

export default Avatar
