import React from 'react'
import { useState, useRef } from "react";
import { motion } from "framer-motion";
function Switch(props) {
    const [isOn, setIsOn] = useState(props.value);
    const ref = useRef(props.ref);
    const toggleSwitch = () => {setIsOn(!isOn); ref.current.value = !isOn};
  
    return (
      <div className="switch" data-ison={isOn} onClick={toggleSwitch}>
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