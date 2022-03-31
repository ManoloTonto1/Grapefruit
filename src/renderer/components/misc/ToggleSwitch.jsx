import React from 'react';
import Switch from './Switch';
import { motion } from 'framer-motion';
import { variants2 } from '../Routes/Settings';

export function ToggleSwitch({setter, label, value}) {
  return (
    <>
    
      <motion.div className='text-container' variants={variants2}>
        <motion.label className='label'>{label}</motion.label>
        <motion.div>
          <Switch setter={setter} value={value} />
        </motion.div>

      </motion.div>
    </>
  );
}
