import React from 'react'

const SingleUser = ({data}) => {
  return (
      <div> 
          <h1> Name: {data.name}</h1>
          <h4> Email: {data.email}</h4>
          <p> Address: {data.address}</p>
     </div>
  )
}

export default SingleUser;