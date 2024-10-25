import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home/Homepage.jsx";
import About from "./page/About/About.jsx";
import Director from "./page/director/Director.jsx";
import { Route, Routes } from "react-router";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="w-screen min-h-screen flex flex-col bg-gradient-to-tr from-yellow-200 to-green-300 bg-cover bg-center bg-fixed">
            <Navbar />
            <div className="mx-10 ">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/director" element={<Director />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
