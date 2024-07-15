import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../style'
import { avatar } from '../assets'
import { SectionWrapper } from "../hoc";
import { games } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'


const GameCard = ({index, name, description, image, source_code_link}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index*0.5, 0.75)}>
      <Tilt options ={{max:45, scale:1, speed: 450}} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div onClick={() => window.open(source_code_link, "_blank")} 
            className='bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img src={avatar} alt='avatar' className=' w-1/2 h-1/2'/>
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        
      </Tilt>
    </motion.div>
  )
}

const Games = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Little games for you to have fun</p>
        <h2 className={styles.sectionHeadText}>Games</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Give yourself some time to relax between so many applications. Click on the upper-right avatar to start.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {games.map((project, index) => (
          <GameCard key={`project-${index}`} index={index} {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Games, "games")