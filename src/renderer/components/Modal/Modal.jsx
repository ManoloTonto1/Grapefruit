import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { useCallback } from "react";
import { useEffect, useState } from "react";
import Multiselect from 'multiselect-react-dropdown';


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
  

  const Input = () => {
    return (
    <>
    <input placeholder="Description" />
    <input placeholder="Price" />
    </>
    );
  };

const Modal = ({ handleClose, text }) => {

  const [dropdown, setDropdown] = useState({options: [{name: 'Bold', id: 1},{name: 'Underline', id: 2},{name: 'Itallic', id: 3}]});
  
  const [inputList, setInputList] = useState([
  <>
  <div className="modal-input-row">
    <input className="input" type="text" placeholder="Description" /> 
    <input className="input" type="text" placeholder="Price"/> 
    <div className="dropdown">
    <Multiselect
    options={dropdown.options} // Options to display in the dropdown
     // Class name to style the dropdown
    //selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
    //onSelect={this.onSelect} // Function will trigger on select event
    //onRemove={this.onRemove} // Function will trigger on remove event
    displayValue="name" // Property name to display in the dropdown options
    />
    </div>
  </div>

  </>

  ]);
    const onAddBtnClick = event => {
      setInputList(inputList.concat(<Input key={inputList.length} />));
    };
  

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
            {inputList}
            <i className="fa-solid fa-circle-xmark" onClick={handleClose}></i>
            <input className="submit" type="submit" value="Submit" onClick={"submit"} />
            <input className="submit" type="submit" value="Add Field" onClick={onAddBtnClick} />
          </motion.div>
      </Backdrop>
    );
  };

  
  export default 

Modal;