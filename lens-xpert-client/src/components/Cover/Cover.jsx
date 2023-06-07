import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({img,title}) => {
    return (
        <Parallax
            blur={{ min: -65, max: 65 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            {/* Blur transition from min to max */}
            <div className="hero h-[400px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className=" mt-14 text-4xl text-white font-bold">{title}</h1>
                    </div>
                </div>
            </div>
        </Parallax>
    );
}

export default Cover;
