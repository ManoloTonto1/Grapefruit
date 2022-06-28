import React from 'react';
import { motion } from 'framer-motion';
import { variants2 } from '../Routes/Settings';
import { INumberInput } from './types';

export function NumberInput(props: INumberInput) {
  return (
    <>
      <motion.div className='text-container' variants={variants2}>
        <motion.label className='label'>{props.label}</motion.label>
        <motion.input className="input-small" type="number" step=".01" defaultValue={props.value} />
      </motion.div>
    </>
  );
}
