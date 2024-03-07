/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const SingleUser = ({ data }) => {
  const handleDelete = (data) => {
      const agree= window.confirm(`Are you sure Delete This Id: ${data._id}`)
      console.log(agree)
    if (agree) {
          console.log("detele Id:", data._id)
     }
   }
  return (
      <div> <h1> Name: {data._id}</h1>
          <h1> Name: {data.name}</h1>
          <h4> Email: {data.email}</h4>
      <p> Address: {data.address}</p>
       <button onClick={ ()=>handleDelete(data)} className='font-bold text-2xl'> x</button>
     </div>
  )
}

export default SingleUser;