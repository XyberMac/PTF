"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Odometer from "react-odometerjs"
import Archievement from "./Archievement";
import { BackgroundBeams } from "../ui/background-beams";
import { SparklesCore } from "../ui/sparkles";
import {Globe} from "../globe"
import { Link } from "react-scroll";

export function Hero() {
    const words = `Hi i'm makhosi, a full stack web developer based in Zimbabwe.Join hands with me and transform your ideas into a great online presence
`;

  return (
    <div>
    <div className="w-full relative flex flex-col items-center min-h-[100vh] p-5 justify-center gap-10 bg-slate-950">
        <div className="flex items-center justify-evenly">
    <TextGenerateEffect words={words} className="w-[50%] text-center mx-autotext-[aqua]" />
    </div>
    <Link className="cursor-pointer" to="home" smooth={true}>
    <button className=" cursor-pointer p-[3px] relative">
    <div className=" inset-0 bg-gradient-to-r absolute from-indigo-500 to-purple-500 rounded-lg" />
    <div className="px-8 py-2   bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        Show my work 
    </div>
</button>
</Link>
   <Archievement/>
    </div>
    <BackgroundBeams/>
    </div>
  );
}
