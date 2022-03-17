import React from 'react';
import { motion } from 'framer-motion';
import { variants2 } from '../Routes/Settings';

export function TextInput(props) {
  return (
    <>
      <motion.div className='text-container' variants={variants2}>
        <motion.label className='label'>{props.label}</motion.label>
        <motion.input onChange={ (event) =>  props.setter(event.target.value)} className="input" type="text" ref={props.ref} defaultValue={props.value} />
      </motion.div>
    </>
  );
}
