"use client";
import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const PaperPlane: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 38"
    width="320"
    height="320"
    {...props}
  >
    <path
      fill="none"
      stroke="#6B6C6E"
      strokeWidth="2"
      strokeLinejoin="round"
      d="M28 24.2l-4.8 10.012 8.391-7.115L23.2 34.212V22.4L62.375 3.125 23.2 22.4l-21-1.9c-0.9-0.3-1.4-1.3-1.1-2.3L61.8 2c0.9 0.3 1.4 1.3 1.1 2.3L44.8 34.8c-0.3 0.9-1.3 1.4-2.3 1.1L28 24.2 62.375 3.125 28 24.2z"
    />
  </svg>
);

const ArrowDown: React.FC = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="48"
    height="48"
    whileHover={{
      y: [0, -5, 0],
      transition: { duration: 1, repeat: Number.POSITIVE_INFINITY },
    }}
  >
    <motion.path
      fill="none"
      stroke="#292D32"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M19.92 8.95L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.08 8.95"
    />
  </motion.svg>
);

export const HeroSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsHovered(true);
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsHovered(false);
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-gray-100 overflow-hidden">
      {/* Animated paper planes */}
      <div className="absolute inset-0 pointer-events-none">
        <PaperPlane
          className="absolute w-12 h-12 animate-float-1"
          style={{ top: "10%", left: "10%" }}
        />
        <PaperPlane
          className="absolute w-16 h-16 animate-float-2"
          style={{ top: "30%", right: "15%" }}
        />
        <PaperPlane
          className="absolute w-10 h-10 animate-float-3"
          style={{ bottom: "20%", left: "20%" }}
        />
        <PaperPlane
          className="absolute w-14 h-14 animate-float-4"
          style={{ bottom: "40%", right: "25%" }}
        />
      </div>

      <div
        className="text-center z-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1 className="text-3xl font-bold tracking-light text-cloud sm:text-5xl">
          <b className="text-black">Don Cho</b> is a Product Designer at Studio
          Lupa, <span className="block">currently based in New York.</span>
        </h1>
        <div className="relative w-64 h-64 mx-auto mt-8">
          <Image
            src="/profile-image.jpg"
            alt="Yun Dong Cho"
            layout="fill"
            objectFit="cover"
            className={`rounded-full transition-transform duration-300 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
        </div>
      </div>

      {/* Animated Arrow Down */}
      <Link href="#work" passHref>
        <motion.a
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          aria-label="Scroll to Work Section"
        >
          <ArrowDown />
        </motion.a>
      </Link>
    </section>
  );
};
