import "../App.css";
import React from "react";
import bgPic from "../assets/bg.jpg";
import Navbar from "../components/Navbar";
import SlideText from "../components/SideText";
import RegisterFrom from "../components/Register/RegisterForm";


const Home: React.FC = () => {
    return (
        <div>
            <div className="h-[700px] relative ">
                <img src={bgPic} alt="background" className="fixed right-0 top-0 h-full w-screen object-cover -z-10 " />
                <Navbar />
                <div className="items-center"><RegisterFrom /></div>
                
            </div>
            <div className="w-full"><SlideText /></div>
            {/* About */}
        </div>
    );
};

export default Home;
