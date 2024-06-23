import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between bg-white-50 shadow-lg m-2 h-20">
            <div className="flex gap-2">
                <img
                    className="w-16 my-3 mt-3 "
                    src="https://www.edudwar.com/wp-content/uploads/2023/02/best-ngo-in-india.png"
                ></img>
                <h1 className="font-bold text-lg italic my-auto">
                    BHATAVERA FOUNDATION
                </h1>
            </div>
            {/* <Button gradientDuoTone="purpleToBlue" outline>
        <Link to="/form1">Form 1</Link>
      </Button> */}
            <div className="flex items-center">
                <ul className="flex gap-2 p-4 m-4">
                    <Button gradientDuoTone="purpleToBlue">
                        <Link to="/home">Home</Link>
                    </Button>
                    <Button gradientDuoTone="purpleToBlue" outline>
                        <Link to="/sign-up">Registration</Link>
                    </Button>
                    <Button gradientDuoTone="purpleToBlue" outline>
                        <Link to="/sign-in">Login</Link>
                    </Button>
                </ul>
            </div>
        </div>
    );
};

export default Header;