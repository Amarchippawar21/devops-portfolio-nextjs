"use client";

import {
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Left */}

          <div>
            <h2 className="text-3xl font-bold">
              Amar <span className="text-cyan-400">Chippawar</span>
            </h2>

            <p className="text-gray-400 mt-2">
              DevOps Engineer • Cloud • Networking • Cyber Security
            </p>
          </div>

          {/* Right */}

          <div className="flex gap-5">

            <a
              href="https://github.com/Amarchippawar21"
              target="_blank"
              className="bg-slate-800 p-4 rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="mailto:amarchippawar101@gmail.com"
              className="bg-slate-800 p-4 rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
            >
              <FaEnvelope size={22} />
            </a>

            <a
              href="tel:+919405157316"
              className="bg-slate-800 p-4 rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
            >
              <FaPhone size={22} />
            </a>

            <a
              href="#home"
              className="bg-cyan-500 p-4 rounded-full text-black hover:scale-110 transition-all duration-300"
            >
              <FaArrowUp size={20} />
            </a>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-gray-500">

          © {new Date().getFullYear()} Amar Chippawar. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}