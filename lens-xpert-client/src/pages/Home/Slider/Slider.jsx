import './Slider.css'
import Slider1 from "../../../assets/images/slider1.jpg"
import Slider2 from "../../../assets/images/slider2.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const Slider = () => {
    return (
        <div className='pt-10'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="hero h-[500px]" style={{ backgroundImage: `url(${Slider1})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-5xl font-bold">AN INTRODUCTION TO PHOTOGRAPHY</h1>
                                <p className="mb-5">The fastest way to master your camera and boost your creativity</p>
                                <button className="btn btn-acent">Start Learning</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[500px]" style={{ backgroundImage: `url(${Slider2})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-5xl font-bold">PHOTOGRAPHY & ONLINE CLASSES</h1>
                                <p className="mb-5">Become the photographer you've always wanted. Today's greats will show you how.</p>
                                <button className="btn btn-acent">Start Learning</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;
