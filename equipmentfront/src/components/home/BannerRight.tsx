import "../../App.css";
import React from "react";
import BannerPng from "../../assets/Equip.jpg";

const BannerRight: React.FC = () => {
    return (
        <div
            className="py-12 sm:py-0 relative"
            style={{ backgroundImage: "radial-gradient(circle, rgba(20,20,30,1) 0%, rgba(0,0,0,1) 100%)" }}
        >
            <div className="container min-h-[620px] flex items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center pt-14">
                    
                    {/* Text Content Section */}
                    <div className="relative lg:pr-20">
                        <div className="relative z-10 space-y-5">
                            <h1 data-aos="fade-up" data-aos-delay="300" className="text-4xl font-semibold uppercase text-white">
                            Work Out, Eat Well, Be Patient. Your body will reward you  {" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green2 to-green5">
                                    at the FitFlowz
                                </span>
                            </h1>
                            <p data-aos="fade-up" data-aos-delay="500" className="text-white">
                            Join us to experience our state-of-the-art fitness equipment! From treadmills and weight machines to 
                            resistance bands and yoga mats, we have everything you need to enhance your workout routine..
                            </p>
                        </div>

                        {/* Background Color Blob */}
                        <div className="h-[300px] w-[300px] bg-gradient-to-r from-white to-green1 rounded-full absolute bottom-[-50px] left-[300px] blur-3xl opacity-50"></div>
                    </div>

                    {/* Image Section */}
                    <div data-aos="fade-up">
                        <img src={BannerPng} alt="Banner" className="w-auto h-[480px] rounded-bl-[120px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerRight;
