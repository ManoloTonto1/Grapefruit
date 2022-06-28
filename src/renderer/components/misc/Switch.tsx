import { useState } from "react";
import { motion } from "framer-motion";
import { spring } from "./animations";

function Switch({value,setter}: {value:boolean, setter: (e:boolean)=>void}) {
  const [isOn, setIsOn] = useState(value);
  const toggleSwitch = () => {setIsOn(!isOn); setter(!isOn)};
  
  
    return (
      <div className="switch" data-ison={isOn} onClick={toggleSwitch} >
        <motion.div className="handle" layout transition={spring} />
      </div>
    );
  }
  


export default Switch