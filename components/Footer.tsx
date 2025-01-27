import type React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <a href="https://www.linkedin.com/in/donchony/">
            <p className="flex flex-wrap text-cloud hover:text-cloud/70 font-semibold">
              Connect
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/donchony/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 ml-2 mr-4 mb-4 sm:mb-2"
          >
            <Image src="/linkedin.svg" alt="LinkedIn" width="48" height="48" />
          </a>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              GitHub
            </a>
            <a href="#" className="hover:text-gray-300">
              Twitter
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          © {new Date().getFullYear()} Yun Dong Cho. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
