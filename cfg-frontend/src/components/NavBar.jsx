import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    console.log("NavBar component rendered");

    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="flex justify-between items-center bg-gray-50 shadow-lg m-2 h-20">
            <div className="logo">
                <img className="w-16 my-2" src="https://www.edudwar.com/wp-content/uploads/2023/02/best-ngo-in-india.png" alt="Bhatavera Foundation Logo" />
            </div>
            <h1 className="font-bold text-lg italic my-auto">BHATAVERA FOUNDATION</h1>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 space-x-4">
                    <li>
                        <button
                            onClick={() => handleNavigation('/')}
                            className="p-2 rounded-lg shadow-md shadow-gray-400 hover:bg-blue-500"
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleNavigation('/courses')}
                            className="p-2 rounded-lg shadow-md shadow-gray-400 hover:bg-blue-500"
                        >
                            Courses
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleNavigation('/registration')}
                            className="p-2 rounded-lg shadow-md shadow-gray-400 hover:bg-blue-500"
                        >
                            Registration
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleNavigation('/login')}
                            className="p-2 rounded-lg shadow-md shadow-gray-400 hover:bg-blue-500"
                        >
                            Login
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
