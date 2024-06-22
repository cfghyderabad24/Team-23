import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex justify-between bg-white-50 shadow-lg m-2 h-20" >
    <div className="logo">
        <img  className="w-16 my-3 mt-3 " src= "https://www.edudwar.com/wp-content/uploads/2023/02/best-ngo-in-india.png"></img>
    </div>
    <h1 className='font-bold text-lg italic my-auto'>BHATAVERA FOUNDATION</h1>
    <div className="flex items-center">
        
            <ul className="flex p-4 m-4">  
            <button className="p-2 mx-2 rounded-lg shadow shadow-gray-400 hover:bg-blue-500"><Link to="/">Home</Link></button>
            <button className="p-2 mx-2 rounded-lg shadow shadow-gray-400 hover:bg-blue-500"><Link to="/courses">Courses</Link></button>
                <button className=" p-2 mx-2  rounded-lg shadow shadow-gray-400 hover:bg-blue-500"><Link to="/registration">Registration</Link></button>
                
                <button className="p-2 mx-2 rounded-lg shadow shadow-gray-400 hover:bg-blue-500"><Link to="/login">Login</Link></button>
            </ul>
    </div>
</div>

  )
}

export default Header