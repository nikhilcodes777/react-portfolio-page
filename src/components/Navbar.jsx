import { motion } from "framer-motion"
import { navVariants } from "../utils/motion"
import { firstname, lastname } from "../constants"

const Navbar = () => {
  const Navitems = ["Home", "Skills", "Services", "Testimonials", "Contact"]
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="text-ctp-text fixed z-10 left-0 w-full px-16 py-3 justify-center flex sm:justify-between items-center bg-[rgba(30,30,46,0.3)]   backdrop-blur-md cursor-pointer">
      <motion.div className="text-2xl font-bold transition-transform duration-200 ease-linear hover:scale-110">{firstname} <span className="text-primary text-shadow-glow">{lastname}</span></motion.div>
      <ul className="hidden gap-x-3 font-bold sm:flex sm:items-center">
        {
          Navitems.map((item, index) => (
            <li key={"navitem" + index} className="text-sm cursor-pointer hover:text-primary hover:underline hover:underline-offset-[6px] transition-all ease-linear duration-200" ><a href={"#" + item}>{item}</a></li>
          ))
        }
      </ul>
    </motion.nav>
  )
}

export default Navbar
