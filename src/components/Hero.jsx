import pfp from "../assets/pfp-3.jpg"
import React from 'react';
import Typed from 'typed.js'
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Button from "./Button";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "../utils/motion";
import { firstname } from "../constants";

const Hero = () => {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['UI/UX Designer', 'Developer'],
      typeSpeed: 60,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.25
      }}
      id="Home" className="overflow-hidden flex flex-col gap-10 sm:gap-16 justify-center items-center h-screen sm:flex-row">
      <motion.img
        variants={slideIn('left', 'tween', 0.0, 0.9)}
        className="w-60 sm:w-[28vw] border-I rounded-[50%] cursor-pointer shadow-purple-glow transition-shadow duration-300 ease-in-out hover:glow-more" src={pfp} alt="PFP" />

      <motion.div
        variants={slideIn('right', 'tween', 0.1, 0.9)}
        className="sm:w-[30vw] px-8">

        <h1 className="text-2xl font-bold md:text-5xl">Hi, It&apos;s <span className="text-primary">{firstname}</span></h1>
        <h3 className="mt-2 text-xl font-bold md:text-4xl">I&apos;m a <span ref={el} className="text-primary"></span></h3>

        <p className="mt-7 text-sm font-bold text-pretty">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam iste omnis blanditiis aut facilis distinctio assumenda asperiores laborum officiis quos, perferendis non pariatur sapiente minima ea deserunt repudiandae maxime consequatur.</p>
          <div className="flex items-center justify-between w-[130px] mt-3">
            <FaGithub className="text-primary transition-all ease-linear duration-100 border-primary border-2 text-2xl p-1 rounded-[50%] cursor-pointer hover:scale-125 hover:bg-primary hover:text-white hover:border-none hover:glow-less" />
            <FaInstagram className="text-primary transition-all ease-linear duration-100 border-primary border-2 text-2xl p-1 rounded-[50%] cursor-pointer hover:scale-125 hover:bg-primary hover:text-white hover:border-none hover:glow-less" />
            <FaLinkedin className="text-primary transition-all ease-linear duration-100 border-primary border-2 text-2xl p-1 rounded-[50%] cursor-pointer hover:scale-125 hover:bg-primary hover:text-white hover:border-none hover:glow-less" />
            <FaYoutube className="text-primary transition-all ease-linear duration-100 border-primary border-2 text-2xl p-1 rounded-[50%] cursor-pointer hover:scale-125 hover:bg-primary hover:text-white hover:border-none hover:glow-less" />
          </div>

          <div className="flex gap-5 items-center mt-7">
            <Button isglow={true}>Hire</Button>
            <Button isglow={false}>Contact</Button>
          </div>
      </motion.div>
    </motion.section>
  )
}

export default Hero
