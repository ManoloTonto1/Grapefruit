import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
function Switch(props) {
    const [isOn, setIsOn] = useState(props.value);

    const toggleSwitch = () => setIsOn(!isOn);
  
    return (
      <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
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