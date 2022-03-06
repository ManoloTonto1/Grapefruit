import React from 'react';
import { motion } from 'framer-motion';

export function Plusbutton({click}) {
  const hover = {
    scale: 1.1,
  };
  const onclick = {
    scale: 0.9,
    rotate: [0, 270, 270,270]
  };
  const fadein = {
    hidden: {
      x: "-100vh",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        damping: 20,
        stiffness: 200,
      },
    },
    exit: {
      
      x: "-100vh",
      opacity: 0,
      transition: { duration: 0.5 }
    },
  };
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
