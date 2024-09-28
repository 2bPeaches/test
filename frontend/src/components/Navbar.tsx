import "../App.css";
import React from "react";
import { IoIosFitness } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <div className=" w-srceen z-50 bg-black/30 backdrop-blur-sm  sm:py-1">
            <div className="container ">
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-4 font-bold italic text-3xl text-white">
                        <IoIosFitness className=" h-auto w-10 " />
                        <span>FitFlowz</span>
                    </div>
                    <div className="text-white ">
                        <ul className="flex items-center gap-6 text-xl py-4">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="/#about">About</a>
                            </li>
                            <li>
                                <a href="/#pricing">Pricing</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className=" flex items-center gap-4">
                    <Link to="/register">
                        <button className="text-white font-sans font-medium text-m px-5 py-3 flex items-center bg-transparent rounded-full hover:bg-green hover:text-black shadow-md hover:shadow-lg">
                            <span>Sign up</span>
                        </button>
                        </Link>
                        <Link to="/login">
                        <button className="text-black font-sans font-medium text-m px-5 py-3 flex items-center bg-green rounded-full hover:bg-transparent hover:text-white shadow-md hover:shadow-lg">
                            <span>Login</span>
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
