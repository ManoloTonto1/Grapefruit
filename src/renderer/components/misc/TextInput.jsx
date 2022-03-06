import React from 'react';
import { motion } from 'framer-motion';
import { variants2 } from '../Routes/Settings';

export function TextInput(props) {
  return (
    <>
      <motion.div className='text-container' variants={variants2}>
        <motion.label className='label'>{props.label}</motion.label>
        <motion.input className="input" type="text" defaultValue={props.value} />
      </motion.div>
    </>
  );
}
