import { div } from "framer-motion/client";
import React from "react";

function Footer() {
    return (
        <div>
            <footer className="w-full px-10 min-h-96 bg-[rgba(0,0,0,0.7)] flex flex-col pb-10 gap-10 text-white">
                <div className="flex flex-wrap justify-around w-full">
                    <div className="">
                        <div className=" flex my-6">
                            <h1 className="text-2xl relative header z-10">
                                About us
                            </h1>
                        </div>
                        <ul className="mx-3 list-disc">
                            <li>โรงเรียนสุรวิทยาคาร อ.เมือง จ.สุรินทร์</li>
                            <li>
                                372 ถ.หลักเมือง ต.ในเมือง อ.เมือง จ.สุรินทร์
                                32000
                            </li>
                            <li>
                                สำนักงานเขตพื้นที่การศึกษามัธยมศึกษาสุรินทร์
                            </li>
                            <li>สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน</li>
                            <li>กระทรวงศึกษาธิการ</li>
                            <li>E-Mail : webmaster@sura.ac.th</li>
                            <li>โทรศัพท์ 044 : 069610</li>
                        </ul>
                    </div>
                    <div>
                        <div className=" flex my-6">
                            <h1 className="text-2xl relative header z-10">
                                แผนที่โรงเรียน
                            </h1>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d482.0044313294177!2d103.498796!3d14.879296!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3119e24c93749fdb%3A0x6ffb4872c4d94aaf!2z4LmC4Lij4LiH4LmA4Lij4Li14Lii4LiZ4Liq4Li44Lij4Lin4Li04LiX4Lii4Liy4LiE4Liy4Lij!5e0!3m2!1sth!2sth!4v1729442746548!5m2!1sth!2sth"
                            className="w-56 h-56 border-none rounded-lg"
                        ></iframe>
                    </div>
                </div>
                <div className="w-full">
                    <h1 className="text-center">
                        Copyright © 2024 โรงเรียนสุรวิทยาคาร จ.สุรินทร์. All
                        rights reserved.
                    </h1>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
