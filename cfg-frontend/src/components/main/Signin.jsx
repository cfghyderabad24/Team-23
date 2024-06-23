import React, { useState } from "react";
import { Button, Label, TextInput, Select } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import NGO from "./NGO";
import Student from "./Student";
import Volunteer from "./Volunteer";
import Admin from "./Admin";

const Signin = () => {
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authorized, setAuthorized] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setAuthorized(true);
        renderRoleComponent();
    }

    const renderRoleComponent = () => {
        switch (role) {
            case 'ngos':
                console.log(role);
                navigate('/ngo');
                break;
            case 'student':
                console.log(role);
                navigate('/student');
                break;
            case 'volunteer':
                console.log(role);
                navigate('/volunteer');
                break;
            case 'admin':
                console.log(role);
                navigate('/admin');
                break;
            default:
                console.log('Invalid role');
                break;
        }
    }

    return (
        <div className="min-h-screen mt-20">
            <div className="min-h-screen mt-20">
                <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
                    <div className="flex-1">
                        <Link to="/" className="font-bold dark:text-white text-4xl">
                            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                                St. Bhatevara's
                            </span>
                            Page
                        </Link>
                        <p className="text-sm mt-5">
                            Welcome to the signin page of St Bhatevara NGO
                        </p>
                    </div>

                    <div className="flex-1">
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <div>
                                <Label value="Select Role" />
                                <Select
                                    id="role"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <option value="student">Student</option>
                                    <option value="alumni">Alumni</option>
                                    <option value="ngos">NGO Partner</option>
                                    <option value="volunteer">Volunteer</option>
                                    <option value="admin">Admin</option>
                                </Select>
                            </div>
                            <div>
                                <Label value="Your email" />
                                <TextInput
                                    type="text"
                                    placeholder="Email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <Label value="Your password" />
                                <TextInput
                                    type="password"
                                    placeholder="Password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <Button gradientDuoTone="purpleToPink" type="submit">
                                Sign In
                            </Button>
                        </form>
                        <div className="flex gap-2 text-sm mt-5">
                            <span>Do not have an account?</span>
                            <Link to="/sign-up" className="text-blue-500">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
