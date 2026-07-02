"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaDocker,
  FaAws,
  FaLinux,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";

import {
  SiKubernetes,
} from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden px-6"
    >

      {/* Background Logos */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <motion.div
         animate={{ y: [0, -20, 0], rotate: [-15, -8, -15] }}
         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10"
        >
          <FaDocker className="text-[140px] text-sky-400 opacity-15" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 18, 0], rotate: [15, 8, 15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10"
        >
          <SiKubernetes className="text-[140px] text-blue-400 opacity-15" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-20 left-16"
        >
         <FaAws className="text-[130px] text-orange-400 opacity-15" />
        </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-16 right-16"
      >
       <FaLinux className="text-[120px] text-yellow-300 opacity-15" />
      </motion.div>

        <FaGitAlt className="absolute top-1/2 left-10 text-[100px] text-orange-500 opacity-15" />

        <FaPython className="absolute top-1/2 right-10 text-[100px] text-cyan-400 opacity-15" />

        <h1 className="absolute top-12 left-1/2 -translate-x-1/2 text-[170px] font-black text-white opacity-[0.03] tracking-widest">
          DEVOPS
        </h1>

        <h1 className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[120px] font-black text-cyan-400 opacity-[0.04] tracking-widest">
          CYBER SECURITY
        </h1>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-5xl"
      >

        {/* Profile */}

        <div className="flex justify-center mb-8">

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="relative"
          >

            <Image
              src="/images/profile.png"
              alt="Amar Chippawar"
              width={190}
              height={190}
              className="rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_45px_rgba(34,211,238,0.7)] hover:scale-105 transition-all duration-500"
            />

            <div className="absolute inset-0 rounded-full border-4 border-cyan-400 animate-pulse opacity-40"></div>

          </motion.div>

        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-cyan-400 text-xl mb-3"
        >
          👋 Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-white via-cyan-300 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.8)]"
        >
          Amar Chippawar
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-3xl md:text-4xl text-gray-300 mt-6 font-semibold"
        >
          DevOps Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-400 mt-8 max-w-2xl mx-auto leading-8 text-lg"
        >
          Passionate about Linux, Docker, Kubernetes, AWS,
          Jenkins, Terraform and Cyber Security.
          I build scalable cloud infrastructure and secure
          DevOps pipelines.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex justify-center gap-5 flex-wrap"
        >
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2 }}
  className="mt-10 flex justify-center gap-5 flex-wrap"
>

</motion.div>
          <a
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 hover:shadow-[0_0_35px_rgba(34,211,238,0.8)] px-7 py-3 rounded-xl text-black font-semibold transition-all duration-300 hover:scale-110"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="border border-cyan-500 px-7 py-3 rounded-xl hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_35px_rgba(34,211,238,0.8)] transition-all duration-300 hover:scale-110"
          >
            View Projects
          </a>

        </motion.div>

      </motion.div>

    </section>
  );
}