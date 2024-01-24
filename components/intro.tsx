"use client";

import Image from "next/image";
import React from "react";
import profileImg from "@/public/portfolio-img.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={profileImg}
              alt="Profile Image"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-28 w-28 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 font-medium text-2xl !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Jared Addair</span>, a passionate
        <span className="font-bold"> front-end developer</span> with
        <span className="font-bold"> 3 years</span> of experience. I specialize
        in crafting sleek interfaces and have a keen interest in diving into the
        <span className="italic"> backend world</span>.
      </motion.p>
      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      initial={{opacity: 0, y:100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.3}}
      >
        <Link
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          href="#contact"
        >
          Contact me here <BsArrowRight className="group-hover:translate-x-1 transition opacity-70" />
        </Link>
        <a className="group bg-white border border-gray text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 hover:cursor-pointer transition" href="/UpadatedResumePDF.pdf" target="_blank">
          Download Resume <HiDownload className="group-hover:translate-y-1 transition opacity-60" />
        </a>
        <a
          className="bg-white border border-gray text-xl text-gray-700 p-4 flex items-center gap-2 rounded-full"
          href="https://www.linkedin.com/in/jared-addair-0bb6a21b3/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white border text-[1.75rem] border-gray text-gray-700 p-3 flex items-center gap-2 rounded-full"
          href="https://github.com/Addair89"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
