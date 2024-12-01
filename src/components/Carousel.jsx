"use client";

import Image from "next/image";
import { useState } from "react";

const Carousel = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="max-w-3xl mx-auto overflow-hidden">
            <div className="relative rounded-lg shadow-lg">
                {/* Carousel Wrapper */}
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-full h-auto"
                        >
                            <Image
                                src={image}
                                className="object-cover w-full h-auto rounded-xl"
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>

                {/* Slider Indicators */}
                <div className="flex absolute bottom-4 left-1/2 z-10 -translate-x-1/2 space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => setCurrentSlide(index)}
                            className={`w-10 h-1 rounded-full ${currentSlide === index
                                ? "bg-background/70"
                                : "bg-gray-400"
                                } hover:bg-gray-400 focus:outline-none transition`}
                        />
                    ))}
                </div>

                {/* Slider Controls */}
                <button
                    type="button"
                    onClick={goToPreviousSlide}
                    className="flex absolute top-1/2 left-3 z-10 items-center justify-center w-10 h-10 bg-background/50 rounded-full hover:bg-black/80 focus:outline-none transition"
                >
                    <svg
                        className="w-5 h-5 text-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <button
                    type="button"
                    onClick={goToNextSlide}
                    className="flex absolute top-1/2 right-3 z-10 items-center justify-center w-10 h-10 bg-background/50 rounded-full hover:bg-black/80 focus:outline-none transition"
                >
                    <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
