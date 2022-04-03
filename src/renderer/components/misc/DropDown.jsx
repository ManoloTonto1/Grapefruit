import React from 'react'
import { motion } from 'framer-motion';
import { variants2 } from '../Routes/Settings';

function DropDown(props) {
  return (
    <>
    <motion.div className='text-container' variants={variants2}>
      <motion.label className='label'>{props.label}</motion.label>
      <motion.input className="input-small" type="text" list='lang'  defaultValue={props.value} />
        <datalist id='lang'>
            <option value='es'></option>
            <option value='en'></option>
        </datalist>
    </motion.div>
  </>
  )
}

export default DropDown