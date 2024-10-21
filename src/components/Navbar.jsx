import React, { useState } from "react";
import SWKLOGO from "../assets/SWKLOGO.png";
import { motion, spring } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

function Navbar() {
    const [openNav, setOpenNav] = useState(false);
    function HandelClick() {
        setOpenNav(!openNav);
    }
    return (
        <div className="w-full px-10 min-h-16 py-3 sticky top-0 z-50">
            <div className="flex justify-between bg-[#9f9f9f55] backdrop-blur-lg items-center h-16 rounded-md">
                <div className="logo flex items-center">
                    <img className=" w-14" src={SWKLOGO} alt="" />
                    <h1 className="text-xl">SurawittaNowath</h1>
                </div>
                <ul className="hidden lg:flex cursor-pointer h-full ">
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                            duration: 3,
                        }}
                        className="px-5 flex items-center hover:bg-gray-200 transition-colors duration-300 rounded-md"
                    >
                        <Link
                            className="w-full h-full flex items-center"
                            to="/"
                        >
                            Something
                        </Link>
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                            duration: 3,
                        }}
                        className="px-5 flex items-center hover:bg-gray-200 transition-colors duration-300 rounded-md"
                    >
                        <Link
                            className="w-full h-full flex items-center"
                            to="/about"
                        >
                            Something
                        </Link>
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                            duration: 3,
                        }}
                        className="px-5 flex items-center hover:bg-gray-200 transition-colors duration-300 rounded-md"
                    >
                        <Link
                            className="w-full h-full flex items-center"
                            to="/"
                        >
                            Something
                        </Link>
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                            duration: 3,
                        }}
                        className="px-5 flex items-center hover:bg-gray-200 transition-colors duration-300 rounded-md"
                    >
                        <Link
                            className="w-full h-full flex items-center"
                            to="/about"
                        >
                            Something
                        </Link>
                    </motion.a>
                </ul>
                <div className="hidden lg:flex cursor-pointer h-full">
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                            duration: 3,
                        }}
                        className="px-5 h-full flex items-center hover:bg-gray-200 transition-colors duration-300 rounded-md"
                    >
                        <Link
                            className="w-full h-full flex items-center"
                            to="/about"
                        >
                            Login
                        </Link>
                    </motion.a>
                </div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                        duration: 3,
                    }}
                    onClick={(e) => HandelClick()}
                    className="flex justify-center items-center px-5 lg:hidden cursor-pointer h-full hover:bg-gray-200 transition-colors duration-300 rounded-md"
                >
                    <RxHamburgerMenu size={30} />
                </motion.div>
                <div
                    className={`${
                        openNav ? "scale-y-100" : "scale-y-0"
                    } flex dropdown absolute top-20 left-0 w-full transition-all`}
                >
                    <ul className="w-full flex flex-col bg-white rounded-lg">
                        <li className="w-full">
                            <Link
                                className=" w-full flex justify-center items-center h-16 hover:bg-slate-200 transition-all rounded-lg"
                                to="/about"
                            >
                                Something
                            </Link>
                        </li>
                        <hr />
                        <li className="w-full">
                            <Link
                                className=" w-full flex justify-center items-center h-16 hover:bg-slate-200 transition-all rounded-lg"
                                to="/about"
                            >
                                Something
                            </Link>
                        </li>
                        <hr />
                        <li className="w-full">
                            <Link
                                className=" w-full flex justify-center items-center h-16 hover:bg-slate-200 transition-all rounded-lg"
                                to="/about"
                            >
                                Something
                            </Link>
                        </li>
                        <hr />
                        <li className="w-full">
                            <Link
                                className=" w-full flex justify-center items-center h-16 hover:bg-slate-200 transition-all rounded-lg"
                                to="/"
                            >
                                Something
                            </Link>
                        </li>
                        <hr />
                        <li className="w-full">
                            <Link
                                className=" w-full flex justify-center items-center h-16 hover:bg-slate-200 transition-all rounded-lg"
                                to="/about"
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
