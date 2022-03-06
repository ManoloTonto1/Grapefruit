import React from 'react';
import Switch from './Switch';
import { motion } from 'framer-motion';
import { variants2 } from '../Routes/Settings';

export function ToggleSwitch(props) {
  return (
    <>
      <motion.div className='text-container' variants={variants2}>
        <motion.label className='label'>{props.label}</motion.label>
        <motion.div>
          <Switch value={props.value} />
        </motion.div>

      </motion.div>
    </>
  );
}
