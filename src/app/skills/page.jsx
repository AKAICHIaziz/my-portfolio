import { Sparkles } from "@/components/Sparkles"
import Image from "next/image"

import react from "@/../public/react.svg"
import next from "@/../public/next2.svg"
import tailwind from "@/../public/tailwind.svg"
import node from "@/../public/node.svg"
import express from "@/../public/express.svg"
import mongo from "@/../public/mongo.svg"
import postgresql from "@/../public/postgresql.svg"
import angular from "@/../public/angular.svg"
import springboot from "@/../public/springboot.svg"
import python from "@/../public/python.svg"
import java from "@/../public/java.svg"
import javascript from "@/../public/javascript.svg"
import c from "@/../public/c.svg"
import php from "@/../public/php.svg"
import ts from "@/../public/ts.svg"
import flask from "@/../public/flask.svg"
import xd from "@/../public/xd.svg"
import ps from "@/../public/ps.svg"

export default function Skills() {

    const frontend_logos = [react, next, angular];
    const backend_logos = [node, express, springboot, php, flask];
    const p_logos = [java, javascript, ts, python, c];
    const design_logos = [xd, ps];


    return (
        <div className="w-full h-full flex flex-col items-center pt-10 ">


            <div className="relative flex flex-col items-center justify-center w-full h-20 sm:h-40">
                <h1 className="font-medium text-xl sm:text-4xl text-gray-400">Tools of My Trade</h1>
                <Sparkles
                    density={1200}
                    className="absolute inset-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
                />
            </div>


            <div className="flex flex-col items-center w-[full] p-5 gap-5">

                <div className="flex flex-col gap-2 w-full sm:w-full">
                    <h1 className="font-bold text-lg sm:text-xl text-foreground">Frontend</h1>
                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 p-4 w-full">
                        {
                            frontend_logos.map((logo, index) => (
                                <div key={index} className="relative h-[3rem] w-[3rem] sm:h-[5rem] sm:w-[5rem] rounded-2xl border bg-card px-2 py-2 sm:px-4 sm:py-4  flex items-center justify-center">
                                    <Image src={logo} alt="tech" className="h-7 w-7 object-contain sm:w-16 sm:h-16" />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-full sm:w-full">
                    <h1 className="font-bold text-lg sm:text-xl text-foreground">Backend</h1>
                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 p-4 w-full ">
                        {
                            backend_logos.map((logo, index) => (
                                <div key={index} className="relative h-[3rem] w-[3rem] sm:h-[5rem] sm:w-[5rem] rounded-2xl border bg-card px-2 py-2 sm:px-4 sm:py-4  flex items-center justify-center">
                                    <Image src={logo} alt="tech" className="h-7 w-7 object-contain sm:w-16 sm:h-16" />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-full sm:w-full">
                    <h1 className="font-bold text-lg sm:text-xl text-foreground">Programming Languages</h1>
                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 p-4 w-full ">
                        {
                            p_logos.map((logo, index) => (
                                <div key={index} className="relative h-[3rem] w-[3rem] sm:h-[5rem] sm:w-[5rem] rounded-2xl border bg-card px-2 py-2 sm:px-4 sm:py-4  flex items-center justify-center">
                                    <Image src={logo} alt="tech" className="h-7 w-7 object-contain sm:w-16 sm:h-16" />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-full sm:w-full">
                    <h1 className="font-bold text-lg sm:text-xl text-foreground">Design</h1>
                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 p-4 w-full ">
                        {
                            design_logos.map((logo, index) => (
                                <div key={index} className="relative h-[3rem] w-[3rem] sm:h-[5rem] sm:w-[5rem] rounded-2xl border bg-card px-2 py-2 sm:px-4 sm:py-4  flex items-center justify-center">
                                    <Image src={logo} alt="tech" className="h-7 w-7 object-contain sm:w-16 sm:h-16" />
                                </div>
                            ))
                        }
                    </div>
                </div>





            </div>


        </div>
    )
}
