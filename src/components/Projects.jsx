import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

import { fadeIn, staggerContainer } from "../utils/motion";
const Projects = () => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref })
  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-100%"])
  return (
    <section className="h-full w-full">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.1
        }}
        ref={ref} className="relative h-[500vh] z-50">
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="h-screen w-screen flex justify-center font-bold items-center text-6xl text-ctp-green">My Projects</motion.div>
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex">
            <div
              className="h-screen w-screen bg-gradient-to-br from-ctp-green to-ctp-rosewater  flex items-center justify-center">
              <div
                className="h-[80%] w-[90%] rounded-[40px] bg-ctp-base text-5xl text-ctp-green font-extrabold flex items-center justify-center">Project 1

              </div>
            </div>
            <div
              className="h-screen w-screen bg-gradient-to-br from-ctp-red to-ctp-yellow flex items-center justify-center">
              <div className="h-[80%] w-[90%] rounded-[40px] bg-ctp-base text-center text-ctp-red text-5xl font-extrabold flex items-center justify-center">Project 2</div>
            </div>

            <div
              className="h-screen w-screen bg-gradient-to-br  from-ctp-sapphire to-ctp-mauve flex items-center justify-center">
              <div className="h-[80%] w-[90%] rounded-[40px] bg-ctp-base text-center text-ctp-sapphire text-5xl font-extrabold flex items-center justify-center">Project 3</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
