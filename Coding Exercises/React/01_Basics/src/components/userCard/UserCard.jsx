import React from 'react'
import pic from '../../assets/Priyanshu (1).png'
import './UserCard.css'

export const UserCard = (props) => {
  return (
    <div className='card'>
      <p className='name'>{props.name}</p>
      <img src={pic} alt="" className='image'/>
      <p className='description'>Description of user</p>
    </div>
  )
}
