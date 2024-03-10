/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

const SingleUser = ({ data }) => {
  const handleDelete = (data) => {
      const agree= window.confirm(`Are you sure Delete This Id: ${data._id}`)
      console.log(agree)
    if (agree) {
      // console.log("detele Id:", data._id)\
      fetch(`http://localhost:4000/users/${data._id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
        .then(setData => {
          if (setData.deletedCount> 0) {
              window.location.reload(setData); // conditional reload Video= 65-6 last-side
          }
      })
     }
   }
  return(
      <div> <h1> Name: {data._id}</h1>
          <h1> Name: {data.name}</h1>
          <h4> Email: {data.email}</h4>
      <p> Address: {data.address}</p>
      <button onClick={() => handleDelete(data)} className='font-bold text-2xl p-2 '> x</button>
     <Link to={`/update/${data._id}`}><button> Update user </button> </Link> 
     </div>
  )
}

export default SingleUser;