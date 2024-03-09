/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import SingleUser from '../SingleUser/SingleUser'

const UserShow = () => {

    const [users, setUser]=useState([])
    useEffect(() => {
        fetch("http://localhost:4000/users")
        .then(res => res.json())
        .then( data => setUser(data))
    },[])
    return (
      <div>
            <h1>All Usersd show  { users.length}</h1>
            {
                users.map(data =>
                    <SingleUser
                        key={data._id}
                        data={data}
                     >       
                </SingleUser>)
            }
          
      </div>
  )
}

export default UserShow