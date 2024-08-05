import { useState } from 'react'
import Skillcard from './Skillcard'
import { mySkills } from '../constants'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/motion'

const Skills = () => {
  const [active, setActive] = useState("skill-3")
  return <motion.section
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{
      once: false,
      amount: 0.25
    }}
    className='h-screen w-screen' id='Skills' >
    <motion.h1
      variants={fadeIn('up', 'tween', 0.2, 1)}
      className='text-4xl font-bold text-center text-primary hover:text-shadow-glow'> Skills I Have</motion.h1>
    <div className='px-12 sm:px-16 mt-8 flex lg:flex-row flex-col min-h-[70vh] gap-5'>
      {mySkills.map((skill, index) => (
        <Skillcard key={skill.id}
          variants={fadeIn('right', 'spring', 0.2 * index, 1)}
          imgUrl={skill.imgUrl}
          {...skill}
          index={index}
          active={active}
          handleClick={setActive}
        />
      ))}

    </div>
  </motion.section >
}

export default Skills
