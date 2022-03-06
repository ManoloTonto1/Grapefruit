import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { useCallback } from "react";
import { useEffect } from "react";


const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  



const Modal = ({ handleClose, text }) => {
  

    const escFunction = useCallback((event) => {
      if (event.keyCode === 27) {
        handleClose();
        
      }
    }, []);
  
    useEffect(() => {
      document.addEventListener("keydown", escFunction);
  
      return () => {
        document.removeEventListener("keydown", escFunction);
      };
    }, [escFunction]);

    return (
      <Backdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}  
            className="modal "
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            onKeyPress={escFunction}
          >
            
            <p>{text}</p>
            <i className="fa-solid fa-circle-xmark" onClick={handleClose}></i>
            <input type="text" onKeyPress={escFunction}/> 
            <input type="submit" value="Submit" onClick={"console"} />
          </motion.div>
      </Backdrop>
    );
  };

  
  export default 

Modal;