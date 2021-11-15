import React from 'react'

const Member = ({className, fname, title, ml, smsize, bgsize}) => {
  return (
    <div title={title} ml={ml} smsize={smsize} bgsize={bgsize}className={className}><img src={`https://avatars.dicebear.com/api/bottts/:${fname}.svg?scale=85&background=%23ffffff`} alt="member_profile_picture" /></div>
  )
}

export default Member
