import React, { useState, useEffect } from "react";
import SWKLOGO from "../../assets/SWKLOGO.png";
import "./Home.css";
import Card from "../../components/Card";
import { motion } from "framer-motion";
import Banner from "./Banner.json";
import { a, img } from "framer-motion/client";

function Homepage() {
    const [banner, setBanner] = useState(Banner);
    const Link_Image = [
        {image:"https://sura.ac.th/wp-content/uploads/2024/08/dbschool-link-stu.jpg",
            url: "http://dbsch2567a.sura.ac.th/student/"
        },
        {image:"https://sura.ac.th/wp-content/uploads/2024/08/dbschool-link-tc.jpg",
            url:"http://dbsch2567a.sura.ac.th/"
        },
        {image:"https://sura.ac.th/wp-content/uploads/2024/08/obeccontentcenter-link-1.png",
            url:"https://contentcenter.obec.go.th/"
        },
        {image:"https://sura.ac.th/wp-content/uploads/2024/08/kruching-banne2r-1-300x52-1.jpg",
            url:"https://sura.ac.th/chingphum-chaisri/"
        },
    ];
    const Link_Image2 = [
        "https://sura.ac.th/wp-content/uploads/2024/08/spmsurin-link-2.jpg",
        "https://sura.ac.th/wp-content/uploads/2024/08/myoffice67-link.jpg",
        "https://sura.ac.th/wp-content/uploads/2024/08/seren4child67-2-1.jpg",
        "https://sura.ac.th/wp-content/uploads/2024/08/seren4child66-1.jpg",
        "https://sura.ac.th/wp-content/uploads/2024/08/nited1-67.jpg",
        "https://sura.ac.th/wp-content/uploads/2024/08/obeccontentcenter-link-1.png",
    ];
    return (
        <div>
            <div className="logo w-full flex justify-center bg-gradient-to-tr from-yellow-200 to-green-300 mix-blend-screen rounded-xl">
                <img className=" w-1/3" src={SWKLOGO} alt="" />
            </div>
            <motion.section
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="my-4 flex gap-2 w-full flex-col lg:flex-row px-4 md:justify-between md:items-start justify-center items-center"
            >
                <div className="order-2 lg:w-auto w-full lg:order-1 bg-[rgba(255,255,255,0.5)] backdrop-blur-2xl p-4 rounded-lg">
                    <div className=" flex my-6">
                        <h1 className="text-3xl relative header z-10">
                            ลิ้งค์ภายในเว็บ
                        </h1>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        {Link_Image.map((items) => (
                            <a href={items.url}>
                                <img className="w-full" src={items.image} alt="" />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="order-1 lg:w-auto w-full lg:order-2 bg-[rgba(255,255,255,0.5)] backdrop-blur-2xl p-4 rounded-lg">
                    <div className=" flex my-6">
                        <h1 className="text-3xl relative header z-10">
                            ผู้อำนวยการโรงเรียน
                        </h1>
                    </div>
                    <div className="flex justify-center items center">
                        <img
                            className="w-[400px] rounded-lg"
                            src="https://sura.ac.th/wp-content/uploads/2024/08/director_somsak2.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="order-3 lg:w-auto w-full lg:order-3 bg-[rgba(255,255,255,0.5)] backdrop-blur-2xl p-4 rounded-lg">
                    <div className=" flex my-6">
                        <h1 className="text-3xl relative header z-10">
                            ลิ้งค์หน่วยงานราชการ
                        </h1>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        {Link_Image2.map((items) => (
                            <a href="">
                                <img className="w-full" src={items} alt="" />
                            </a>
                        ))}
                    </div>
                </div>
            </motion.section>
            <motion.section
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex lg:flex-row flex-col-reverse my-4 gap-2"
            >
                <div className="flex-1">
                    <div className=" flex my-6">
                        <h1 className="text-3xl relative header z-10">
                            ปฎิทินโรงเรียน
                        </h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <iframe
                            src="https://calendar.google.com/calendar/embed?src=nanopop12345%40gmail.com&ctz=Asia%2FBangkok"
                            className="w-full max-w-[50rem] h-[600px]"
                            frameborder="0"
                            scrolling="no"
                        ></iframe>
                    </div>
                </div>
                <div className="flex-1">
                    <div className=" flex my-6">
                        <h1 className="text-3xl relative header z-10">
                            Banner
                        </h1>
                    </div>
                    <div className="max-h-[600px] overflow-auto">
                        {banner.map((items) => (
                            <a href="">
                                <img className="w-full" src={items} alt="" />
                            </a>
                        ))}
                    </div>
                </div>
            </motion.section>
            <motion.section
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="my-4"
            >
                <div className=" flex my-6">
                    <h1 className="text-3xl relative header z-10">
                        ข่าวประชาสัมพันธ์
                    </h1>
                </div>
                <Card />
            </motion.section>
        </div>
    );
}

export default Homepage;
