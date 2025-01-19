import React, { useState, useEffect } from "react";
import PriButton from "../components/PriButton";
import imgBG from "../assets/Background.jpg";
import axios from "axios";
import DataSt from "./datacard.json";

function Card() {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    const [data, setdata] = useState();
    useEffect(() => {
        // axios.get(URL).then((res) => setdata(res.data));
        setdata(DataSt);
        console.log(data);
    }, []);
    return (
        <div className="flex gap-5 flex-wrap justify-center md:justify-start">
            {data ? (
                data.map((items) => (
                    <div className=" flex-1 min-w-72 bg-[#bcffb6c6] gap-2 flex flex-col items-center rounded-lg justify-between py-6 px-4 backdrop-blur-2xl">
                        <div className="flex gap-y-3 flex-col justify-center items-center">
                            <img
                                className=" w-11/12 rounded-lg"
                                src={imgBG}
                                alt=""
                            />
                            <div className="content flex flex-col gap-3 mx-5">
                                <h1 className="text-2xl">{items.title}</h1>
                                <p className=" text-justify h-30 overflow-auto">
                                    {items.body}
                                </p>
                            </div>
                        </div>
                        <div>
                            <PriButton props={"ดูเพิ่มเติม"} />
                        </div>
                    </div>
                ))
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default Card;
