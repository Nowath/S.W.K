import React, { useState } from "react";
import SWKLOGO from "../assets/SWKLOGO.png";
import { motion, spring } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

function Navbar() {
    const [openNav, setOpenNav] = useState(false);
    const [openDrop1, setOpenDrop1] = useState(false);
    const [openDrop2, setOpenDrop2] = useState(false);
    function HandelClick() {
        setOpenNav(!openNav);
    }
    function HandelClick1() {
        setOpenDrop1(!openDrop1);
    }
    function HandelClick2() {
        setOpenDrop2(!openDrop2);
    }
    const NavbarList = [
        { text: "Home", link: "/" },
        { text: "การประเมิน ITA ปี 2567", link: "/about" },
    ];
    return (
        <div className="w-full px-4 md:px-10 min-h-16 py-3 sticky top-0 z-50">
            <div className="flex justify-between bg-[#9f9f9f55] backdrop-blur-lg items-center h-16 rounded-md">
                <div className="logo flex items-center">
                    <img className=" w-14" src={SWKLOGO} alt="" />
                    <h1 className="text-xl">SurawittaNowath</h1>
                </div>
                <ul className="hidden lg:flex cursor-pointer h-full ">
                    {NavbarList.map((items) => (
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                                duration: 3,
                            }}
                            className=" flex items-center hover:bg-gray-200 transition-colors duration-300 rounded-md"
                        >
                            <Link
                                className="w-full px-5 h-full flex items-center"
                                to={items.link}
                            >
                                {items.text}
                            </Link>
                        </motion.a>
                    ))}
                    <div className=" select-none relative h-full">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                                duration: 3,
                            }}
                            className=" flex items-center h-full hover:bg-gray-200 transition-colors duration-300 rounded-md"
                        >
                            <div
                                className="w-full px-5 h-full flex items-center"
                                onClick={(e) => HandelClick1()}
                            >
                                ข้อมูลพื้นฐานของโรงเรียน
                                <div
                                    className={`${
                                        openDrop1 ? `rotate-180` : ``
                                    } transition-all`}
                                >
                                    <ChevronDown />
                                </div>
                            </div>
                        </motion.div>
                        <div
                            className={`${
                                openDrop1
                                    ? `opacity-100 top-20`
                                    : `opacity-0 top-[-3rem]`
                            } flex flex-col absolute left-0 transition-all rounded-md overflow-hidden bg-white w-full`}
                            onClick={(e) => HandelClick1()}
                        >
                            <Link className=" px-4 py-4" to="/director">
                                <h1>ผู้บริหารโรงเรียนสุรวิทยาคาร</h1>
                            </Link>
                        </div>
                    </div>
                    <div className=" select-none relative h-full">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                                duration: 3,
                            }}
                            className=" flex items-center h-full hover:bg-gray-200 transition-colors duration-300 rounded-md"
                        >
                            <div
                                className="w-full px-5 h-full flex items-center"
                                onClick={(e) => HandelClick2()}
                            >
                                ห้องเรียนออนไลน์
                                <div
                                    className={`${
                                        openDrop2 ? `rotate-180` : ``
                                    } transition-all`}
                                >
                                    <ChevronDown />
                                </div>
                            </div>
                        </motion.div>
                        <div
                            className={`${
                                openDrop2
                                    ? `opacity-100 top-20`
                                    : `opacity-0 top-[-20rem]`
                            } flex flex-col absolute left-0 transition-all rounded-md overflow-hidden bg-white w-[120%]`}
                            onClick={(e) => HandelClick2()}
                        >
                            <a
                                className=" px-4 py-4"
                                href="http://krukawita.sura.ac.th/"
                            >
                                <h1>ครูกวิตา อินธิสาร</h1>
                            </a>
                            <hr />
                            <a
                                className=" px-4 py-4"
                                href="http://krupaphada.sura.ac.th/"
                            >
                                <h1>ครูปภาดา เจียมเมืองปัก</h1>
                            </a>
                            <hr />
                            <a
                                className=" px-4 py-4"
                                href="http://kruwatchara.sura.ac.th/"
                            >
                                <h1>ครูวัชระ โกติรัมย์</h1>
                            </a>
                            <hr />
                            <a
                                className=" px-4 py-4"
                                href="http://kruparnpitcha.sura.ac.th/e-learning/"
                            >
                                <h1>ครูปารย์พิชชา ชีวาพรไพศาล</h1>
                            </a>
                        </div>
                    </div>
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
                        {NavbarList.map((items) => (
                            <li className="w-full">
                                <Link
                                    className=" w-full flex justify-center items-center h-16 hover:bg-slate-200 transition-all rounded-lg"
                                    onClick={(e) => HandelClick()}
                                    to={items.link}
                                >
                                    {items.text}
                                </Link>
                            </li>
                        ))}
                        <li className="w-full">
                            <div
                                className={` w-full flex justify-center items-center h-16 hover:bg-slate-200 transition-all rounded-lg`}
                                onClick={HandelClick1}
                            >
                                ข้อมูลพื้นฐานของโรงเรียน
                                <div
                                    className={`${
                                        openDrop1 ? `rotate-180` : `rotate-0`
                                    } transition-all`}
                                >
                                    <ChevronDown />
                                </div>
                            </div>
                            <div className={`${openDrop1 ? `flex` : `hidden`}`}>
                                <Link
                                    className={` w-full flex justify-center items-center h-16 cursor-pointer bg-[rgb(243,243,243)]`}
                                    to="/director"
                                    onClick={(e) => HandelClick()}
                                >
                                    ผู้บริหารโรงเรียนสุรวิทยาคาร
                                </Link>
                            </div>
                        </li>
                        <li className="w-full">
                            <div
                                className={` w-full flex justify-center items-center h-16 hover:bg-slate-200 transition-all rounded-lg`}
                                onClick={HandelClick2}
                            >
                                ห้องเรียนออนไลน์
                                <div
                                    className={`${
                                        openDrop2 ? `rotate-180` : `rotate-0`
                                    } transition-all`}
                                >
                                    <ChevronDown />
                                </div>
                            </div>
                            <div
                                className={`${
                                    openDrop2 ? `flex` : `hidden`
                                } flex-col`}
                            >
                                <a
                                    className={` w-full flex justify-center items-center h-16 cursor-pointer bg-[rgb(243,243,243)]`}
                                    href="http://krukawita.sura.ac.th/"
                                    onClick={(e) => HandelClick()}
                                >
                                    ครูกวิตา อินธิสาร
                                </a>
                                <hr />
                                <a
                                    className={` w-full flex justify-center items-center h-16 cursor-pointer bg-[rgb(243,243,243)]`}
                                    href="http://krupaphada.sura.ac.th/"
                                    onClick={(e) => HandelClick()}
                                >
                                    ครูปภาดา เจียมเมืองปัก
                                </a>
                                <hr />
                                <a
                                    className={` w-full flex justify-center items-center h-16 cursor-pointer bg-[rgb(243,243,243)]`}
                                    href="http://kruwatchara.sura.ac.th/"
                                    onClick={(e) => HandelClick()}
                                >
                                    ครูวัชระ โกติรัมย์
                                </a>
                                <hr />
                                <a
                                    className={` w-full flex justify-center items-center h-16 cursor-pointer bg-[rgb(243,243,243)]`}
                                    href="http://kruparnpitcha.sura.ac.th/e-learning/"
                                    onClick={(e) => HandelClick()}
                                >
                                    ครูปารย์พิชชา ชีวาพรไพศาล
                                </a>
                            </div>
                        </li>
                        <li className="w-full">
                            <Link
                                className=" w-full flex justify-center items-center h-16 hover:bg-slate-200 transition-all rounded-lg"
                                onClick={(e) => HandelClick()}
                                to="/"
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
