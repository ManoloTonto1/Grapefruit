import Switch from './Switch';
import { motion } from 'framer-motion';
import { variants2 } from '../Routes/Settings';
import { IToggleSwitch } from './types';
export function ToggleSwitch({setter, label, value} : IToggleSwitch) {
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
