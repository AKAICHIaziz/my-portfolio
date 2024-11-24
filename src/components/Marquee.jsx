// Import SVGs if stored in `src/assets`
import react from "../../public/react.svg"
import next from "../../public/next.svg"
import node from "../../public/node.svg"
import express from "../../public/express.svg"
import mongo from "../../public/mongo.svg"
import postgresql from "../../public/postgresql.svg"
import angular from "../../public/angular.svg"
import springboot from "../../public/springboot.svg"
import python from "../../public/python.svg"
import flask from "../../public/flask.svg"
import xd from "../../public/xd.svg"
import ps from "../../public/ps.svg"


import Image from "next/image"

// Array of imported logos
const logos = [react, next, node, express, mongo, postgresql, angular, springboot, python, flask, xd, ps];

export default function Marquee() {
    return (
        <div className="relative flex h-fit w-full items-center">
            <div className="relative flex max-w-[100vw] overflow-hidden py-2">
                <div className="flex w-max animate-marquee [--duration:40s] hover:[animation-play-state:paused]">
                    {/* Duplicate the logos array for smooth looping */}
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={index} className="h-full px-2">
                            <div className="relative h-[3rem] w-[3rem] sm:h-[5rem] sm:w-[5rem] rounded-2xl border bg-card px-2 py-2 sm:px-4 sm:py-4  flex items-center justify-center">
                                {/* Display the logo */}
                                <Image src={logo} alt={`Logo ${index + 1}`} className="h-7 w-7 object-contain sm:w-16 sm:h-16" />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}
