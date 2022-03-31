import React from 'react'
import { useState, useRef } from "react";
import { motion } from "framer-motion";

function Switch({value,setter}) {
  const [isOn, setIsOn] = useState(value);
  const toggleSwitch = () => {setIsOn(!isOn); setter(!isOn)};
  
  
    return (
      <div className="switch" data-ison={isOn} onClick={toggleSwitch} >
        <motion.div className="handle" layout transition={spring} />
      </div>
    );
  }
  
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
}

export default Switch