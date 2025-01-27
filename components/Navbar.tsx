"use client";
import type React from "react";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar: React.FC = () => {
  const navContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={navContainerRef}>
      <nav className="fixed mx-auto top-0 left-0 right-0 z-10">
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto py-2 p-8 md:p-12 lg:p-20">
          <Link
            href="https://www.linkedin.com/in/donchony/"
            className="text-1xl md:text-2xl text-cloud font-normal hover:text-cloud/70"
          >
            LinkedIn
          </Link>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              <li key="works">
                <Link href="/work" className="hover:text-cloud/70">
                  Work
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-cloud/70">
                  Resume{" "}
                  <Image
                    src="/diagonal-arrow.svg"
                    alt="Diagonal Arrow"
                    width={24}
                    height={24}
                    className="inline hover:opacity-70"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
