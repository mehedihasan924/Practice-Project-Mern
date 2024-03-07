import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

  const [user, setUser] = useState({})
  
  const handleSubmit = (event) => {
    event.preventDefault();
       console.log(user);
    // const from = event.target;
    // const name = from.name.value;
    // const email = from.email.value;
    // const address = from.address.value;
    // const user = { name, email, address }
    // console.log(user)

      fetch("http://localhost:4000/users",
    {  method: "POST",
      headers: {
       "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    }
      )
      .then(res => res.json())
        .then(data => {
          if (data.acknowledged) {
            alert("User Added Successfully")
           event.target.reset()
         }
      }) 
        
  }


  const handleBlur = (event) => {   
      const value=event.target.value;
      const field= event.target.name;
      const newUser = { ...user };
      newUser[field] = value;
      setUser(newUser)
  }

  return (
         <div className='max-w-screen-full container mx-auto xl:px-[150px] mb-20'>
          <div className='bg-[#f1f1f1] py-10 px-4  lg:px-[120px] rounded-md my-5  '>
                <form onSubmit={handleSubmit} className='space-y-5 '>
                <h1 className=' text-5xl font-bold text-center py-6'> Contact Me</h1>
                    {/* Frist Row  */}
          <div className='flex flex-col gap-5 '>
          <Link to="/alluser">  <h2> Show All user</h2></Link>
                        <div className='w-full text-left '>
                            <label className='block mb-2 text-lg '>Your Name</label>
                          <input onBlur={handleBlur} type="text"  name='name' id='' required placeholder="Your Full Name"  className='block  w-full  border-1 flex-1  py-1.5  pl-3 text-black placeholde:text-gray-400 focus:outline-none sm:textsm sm:leading-6'/>
                        </div>
                        <div className='w-full text-left'>
                            <label className=' block mb-2 text-lg'> Your Email</label>
                            <input onBlur={handleBlur} type="email" name='email' id='' required  placeholder="Your Email "  className='block  w-full  border-1 flex-1 bg-white py-1.5  pl-3 text-gray-900 placeholde:text-gray-400 focus:outline-none sm:textsm sm:leading-6'/>
                        </div>
                        <div className='w-full text-left'>
                            <label className=' block mb-2 text-lg'> Your ddress </label>
                            <input onBlur={handleBlur} type="text"  name='address' id='' required placeholder="Your  Address "  className='block  w-full  border-1 flex-1 bg-white py-1.5  pl-3 text-gray-900 placeholde:text-gray-400 focus:outline-none sm:textsm sm:leading-6 ' />
                        </div>                  
                        </div>
                        {/* last Row */}
                        <div className=' bg-green-500 flex text-center items-center justify-center '>
                            <input type="submit" defaultValue="Join Event" placeholder='Joint Event' className='block mt-2 btn btn-active btn-primary text-black font-semibold   py-2 rounded-md ' />
                        {/* <button onClick={pay} value="Add Users" id="" className='block mt-12 btn btn-active btn-primary text-xl text-white font-semibold  px-12  rounded-md'>Pay to Bikash </button> */}
                    
                    </div>
                </form>      
       </div>
    </div>
  )
}

export default Home