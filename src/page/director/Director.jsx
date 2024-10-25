import React, { useState } from "react";
import Data from "./data.json";
import { motion } from "framer-motion";

function Director() {
    const data = Data;
    return (
        <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="min-h-screen w-full flex flex-col gap-6 my-6"
        >
            <div className="flex justify-center gap-y-2 items-center flex-col">
                <img
                    className=" w-60"
                    src="https://sura.ac.th/wp-content/uploads/2024/10/somsak-225x300.png"
                    alt=""
                />
                <div className="text-center text-green-900">
                    <h1>Tel: 089-8447637</h1>
                    <h1>Email: somsak@sura.ac.th</h1>
                </div>
            </div>
            <div className="flex gap-y-2 flex-wrap justify-evenly">
                {data.map((items) => (
                    <div className=" gap-y-2 flex flex-col">
                        <img className=" w-60" src={items.image} alt="" />
                        <div className="text-center text-green-900">
                            <h1>Tel: {items.tel}</h1>
                            <h1>Email: {items.email}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default Director;
