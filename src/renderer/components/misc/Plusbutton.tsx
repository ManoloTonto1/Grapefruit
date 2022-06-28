import { motion } from 'framer-motion';
import { fadein,hover,onclick } from './animations';

export function Plusbutton({click} : {click:()=>void}) {

  return (
    <motion.button className='add-button'
    variants={fadein}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={hover}
      whileTap={onclick}
      onClick={click}
    ><i className="fa-solid fa-plus"></i></motion.button>
  );
}
