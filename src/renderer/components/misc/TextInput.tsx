
import { motion } from 'framer-motion';
import { variants2 } from '../Routes/Settings';
import { ITextInput } from './types';

export function TextInput({label,ref,value, setter}: ITextInput) {
  return (
    <>
      <motion.div className='text-container' variants={variants2}>
        <motion.label className='label'>{label}</motion.label>
        <motion.input onChange={ (event) =>  setter(event.target.value)} className="input" type="text" ref={ref} defaultValue={value} />
      </motion.div>
    </>
  );
}
