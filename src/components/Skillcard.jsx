import { motion } from "framer-motion"

const Skillcard = ({ id, imgUrl, variants, title, active, handleClick, tools }) => (
  <motion.div
    variants={variants}
    className={`relative ${active === id ? 'lg:flex-[3.5] flex-[25]' : 'lg:flex-[0.5] flex-[5]'} flex items-center justify-center min-w-[170px] h-[500px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}>

    <img className='absolute w-full h-full object-cover rounded-[24px]'
      src={imgUrl} alt={title} />
    {active !== id ? (<h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
      {title}
    </h3>) : (
      <div className='flex absolute bottom-0 flex-col justify-start p-5 bg-[rgba(30,30,46,0.7)] w-full backdrop-blur-md'>
        <h3 className='font-semibold sm:text-[26px] text-lg '>Tools I use for {title}</h3>
        <ul className='ml-4 list-disc'>
          {tools.map((tool, i) => (
            <li key={'tool' + i}>{tool}</li>
          ))}
        </ul>
      </div>)}

  </motion.div>
)

export default Skillcard
