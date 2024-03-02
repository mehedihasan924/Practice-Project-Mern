/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import SingleUser from '../SingleUser/SingleUser'

const UserShow = () => {

    const [users, setUser]=useState([])
    useEffect(() => {
        fetch("http://localhost:4000/users")
        .them(res => res.json())
        .them( data => setUser(data))
    },[])
    return (
      <div>
            <h1> All  Usersd show</h1>
            {
                users.map(data =>
                    <SingleUser
                        key={data.id}
                        data={data}
                     >
                        
                </SingleUser>)
            }
          
      </div>
  )
}

export default UserShow