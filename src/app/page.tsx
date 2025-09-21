"use client"

import ThreeScene from "@/components/ThreeScene";
import React, {useEffect} from "react";
// import {useEffect, useState} from "react";

export default function Home() {

    const keyFrames = [
        {
            frame: 0,
            rotation: { x:0.4, y: -Math.PI / 2, z:-.1 },
            position: { x:1, y:13.3, z:-17 },
        },
        {
            frame: 214,
            rotation: { x:0.4, y: -Math.PI / 2, z:-.1 },
            position: { x:1, y:13.3, z:-17 },
        },
        {
            frame: 320,
            rotation: { x: Math.PI / 2 , y:Math.PI / 2, z:0 },
            position: { x:-2, y:7.6, z:-17 },
        },
        {
            frame: 600,
            rotation: { x: Math.PI / 2 , y:Math.PI / 2, z:0 },
            position: { x:-2, y:7.6, z:-17 },
        },
        {
            frame: 650,
            rotation: { x:0.15, y:Math.PI / 2, z:0 },
            position: { x:-0, y:3.4, z:-17 },
        },
        {
            frame: 850,
            rotation: { x:0.15, y:-Math.PI / 2, z:0 },
            position: { x:-0, y:3.4, z:-17 },
        },
        {
            frame: 900,
            rotation: { x:0, y:-Math.PI / 2, z:0 },
            position: { x:0, y:0.8, z:-17 },
        },
        {
            frame: 1000,
            rotation: { x:0, y:-Math.PI * 3 / 2, z:0 },
            position: { x:0, y:0.8, z:-17 },
        },
        {
            frame: 1050,
            rotation: { x:Math.PI / 2, y:Math.PI / 2, z:0 },
            position: { x:0, y:-2.3, z:-25 },
        },
        {
            frame: 1270,
            rotation: { x:Math.PI / 2, y:Math.PI / 2, z:0 },
            position: { x:0, y:-2.3, z:-25 },
        },
        {
            frame: 1400,
            rotation: { x:0, y:Math.PI / 2, z:0 },
            position: { x:0, y:-9.7, z:-25 },
        },
        {
            frame: 1700,
            rotation: { x:0, y:-Math.PI / 2, z:0 },
            position: { x:0, y:-9.7, z:-25 },
        },
        {
            frame: 1800,
            rotation: { x:0, y:-Math.PI / 2, z:0 },
            position: { x:0, y:-9.7, z:-25 },
        },
    ]

    // const [scrollTop, setScrollTop] = useState(0);
    // const [scroll, setScroll] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setScroll(prev => {
    //             const next = prev + 1;
    //             window.scrollTo(0, next);
    //             return next;
    //         });
    //     }, 20)
    //
    //     return () => clearInterval(interval);
    // }, []); // smooth scrolling

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrollTop(window.scrollY);
    //     };
    //
    //     window.addEventListener("scroll", handleScroll);
    // }, [])

    const [isDesktop, setIsDesktop] = React.useState(false);

    useEffect(() => {
         setIsDesktop(window.matchMedia("(min-width: 769px)").matches);
    }, [])

    if (isDesktop) return (
        <div className="fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col justify-center items-center z-50 text-center p-6">
            <h1 className="text-2xl font-bold mb-4">🚨 Switch to your Phone</h1>
            <p>This experience is designed for mobile devices. Please open this site on your smartphone 📱.</p>
        </div>
    )

    return (
        <div className="w-full h-full flex justify-start items-center relative">
            <ThreeScene keyFrames={keyFrames}/>
            {/*<div className="fixed z-50">*/} {/* To crack frames (scroll progress) */}
            {/*    {scrollTop}*/}
            {/*</div>*/}
            <div className="w-full h-full flex justify-start items-center flex-col">
                <div className="text-white text-4xl m-10 z-10 border-b-4 border-yellow-500">
                    Porsche 911 Carrera 4S
                </div>
                <div className="text-white text-2 m-10 z-10 w-full p-4">
                    <div>The Porsche 911 Carrera 4S</div>
                    <div>is a perfect blend of</div>
                    <div>performance, luxury,</div>
                    <div>and iconic</div>
                    <div></div>
                    <div>design.</div>
                    <div>Known</div>
                    <div>for its dynamic driving experience and all-wheel-drive system, the 911 Carrera 4S brings a balance of power and precision that enthusiasts crave. With a heritage dating back over 50 years, the 911 remains a symbol of automotive excellence.</div>
                </div>
                <div className="text-white text-2 m-10 z-10 w-full p-4 text-right">
                    <div>The Carrera 4S</div>
                    <div>features a sleek,</div>
                    <div>aerodynamic</div>
                    <div>silhouette</div>
                    <div>with smooth</div>
                    <div>lines and</div>
                    <div>a sporty stance</div>
                    <div className="h-10"/>
                    <div className="text-left">
                        <div>Signature elements include:</div>
                        <div className="h-7"/>
                        <div className="w-full flex-col flex justify-between gap-30 text-center">
                            <div className="bg-yellow-500 text-black p-2">
                                •	LED matrix headlights for a modern, sharp look
                            </div>
                            <div className="bg-yellow-500 text-black p-2">
                                •	Wide rear fenders emphasizing its performance capabilities
                            </div>
                            <div className="bg-yellow-500 text-black p-2">
                                •	Distinctive rear light strip connecting the taillights
                            </div>
                            <div className="bg-yellow-500 text-black p-2">
                                •	Lightweight alloy wheels for improved handling
                            </div>
                        </div>
                        <div className="w-full aspect-square mt-20 relative">
                            <div className="pl-2 border-l-2 border-yellow-500 absolute left-30 top-10">
                                <div>
                                    <span>4. 1 </span>
                                    <span className="text-[11px]">s</span>
                                </div>
                                <div className="text-[10px] text-gray-500">
                                    Acceleration 0 - 100 km/h
                                </div>
                            </div>
                            <div className="pl-2 border-l-2 border-yellow-500 absolute left-5 top-80">
                                <div>
                                    290 kW / 394 PS
                                </div>
                                <div className="text-[10px] text-gray-500">
                                    Power (kW)/Power (PS)
                                </div>
                            </div>
                            <div className="pl-2 border-l-2 border-yellow-500 absolute left-70 top-70">
                                <div>
                                    <span>294 </span>
                                    <span className="text-[11px]">km/h</span>
                                </div>
                                <div className="text-[10px] text-gray-500">
                                    Top speed
                                </div>
                            </div>
                        </div>
                        <div className="mt-15 w-full flex flex-row">
                            <div className="border-t-2 border-yellow-500 border-b-2 border-l-2">
                                The one and always.
                            </div>
                            <div className="text-transparent flex-1 border-b-2 border-t-2 border-yellow-500">11</div>
                            <div className="bg-yellow-500 w-20 text-transparent">1111</div>
                        </div>
                        <div className="mt-5">
                            <div className="flex flex-row gap-2">
                                <span>Anyone who dreams of a</span>
                                <span className="bg-yellow-500 pl-1 pr-1">Porsche</span>
                            </div>
                            <div>
                                usually has an image in their mind.
                            </div>
                            <div className="flex flex-row gap-2 mt-3 mb-2">
                                <span className="bg-yellow-700 pl-1 pr-1 text-nowrap">The 911</span>
                                <span className="bg-yellow-600 pl-1 pr-1">has been the epitome of an</span>
                                <span className="bg-yellow-500 pl-1 pr-1">exciting, powerful sports car with</span>
                            </div>
                            <div className="bg-yellow-300 text-black pl-1 pr-1 text-nowrap">
                                day-to-day usability for 60 years.
                            </div>
                            <div>
                                Take a seat behind the wheel of the new 911 and become part of a unique community.
                            </div>
                        </div>
                        <div className="w-full flex mt-30">
                            <button className="bg-yellow-700 flex-1 m-0 text-black p-2">
                                Buy now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  );
}