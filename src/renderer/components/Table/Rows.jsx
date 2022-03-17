import React,{useState} from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import { variants2 } from './Table';
import { Button } from "./Button";
import { Data } from "./Data";
import Document from "../Templates/Invoices/Document";
import Modal from '../Templates/Invoices/Modal/Modal';

function Sidebuttons({type, onClick}) {
    const hover = {
      scale: 1.1,
      y: [0, -10, 8, -8,0],
    };
    const onclick = {
      scale: 0.9,
    };
    const fadein = {
      hidden: {
        x: "-100vh",
        opacity: 0,
      },
      visible: {
        x: "0",
        opacity: 1,
        transition: {
          duration: 1,
          type: "spring",
          damping: 20,
          stiffness: 200,
        },
      },
      exit: {
        
        x: "-100vh",
        opacity: 0,
        transition: { duration: 0.5 }
      },
    };
      return (
      
      <>
          <motion.button
              variants={fadein}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={hover}
              whileTap={onclick}
              onClick="" className="side-button button1" onClick={onClick}><i className="fa-solid fa-file-invoice"></i></motion.button>
          <motion.button
              variants={fadein}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={hover}
              whileTap={onclick}
              onClick="" className="side-button button2" onClick={onClick}><i className="fa-solid fa-pencil"></i></motion.button>
          <motion.button
              variants={fadein}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={hover}
              whileTap={onclick}
              onClick="" className="side-button button3" onClick={onClick}><i className="fa-solid fa-trash-can"></i></motion.button>
      </>
  
      );
  }
  
export function Rows({data, key}) {
    const [selected, setSelected] = useState(false);
    const [show, setShow] = useState(false);
    const close = () => setShow(false);
    const open = () => setShow(true);

    data = data.meta;
    return (
        <>
            
            {selected ? <Sidebuttons/> : null}
            
            <motion.tr variants={variants2}
            onClick={() => setSelected(true)}
           key={key}
            >
                <Data data={data.id} />
                <Data data={data.name} />
                <Data data={data.created_at} />
                <Data data={data.updated_at} />
                <Button type="Preview" onClick={()=>(show ? close() : open())} />
                <Button type="Editar" />
                <Button type="Borrar" />
            </motion.tr>
              <AnimatePresence>
                {show && <Modal modalOpen={show} handleClose={close} />}
              </AnimatePresence>  
        </>


    );
}
