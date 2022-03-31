import React,{useState, useEffect, createContext, ApplicationContext} from 'react'
import Table from '../Table/Table'
import { Plusbutton } from '../misc/Plusbutton'
import Modal  from '../Modal/Modal';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { variants2 } from '../Table/Table';

const fs = require('fs');

function Sidebuttons({id }) {
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
            className="side-button button1" onClick={()=> console.log("i have been clicked", id)}><i className="fa-solid fa-file-invoice"></i></motion.button>
        <motion.button
            variants={fadein}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={hover}
            whileTap={onclick}
            onClick="" className="side-button button2" onClick={}><i className="fa-solid fa-pencil"></i></motion.button>
        <motion.button
            variants={fadein}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={hover}
            whileTap={onclick}
            onClick="" className="side-button button3" onClick={}><i className="fa-solid fa-trash-can"></i></motion.button>
    </>

    );
}





export const ApplicationContext = createContext();
function Invoices() {

  // Start the context Hook
  const [state, setState] = useState(null);
  // End the context Hook
  // useState 
  const [selected, setSelected] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(true);
  
  const getData =()=>{
    const folder = './src/data/invoices';
    fs.readdirSync(folder).forEach(file => {
      let readdata = fs.readFileSync(folder + '/' + file, 'utf8')
      
      setData(prev => [...prev, JSON.parse(readdata)]);
      

  
    });

  }
  useEffect(()=>{
    if(loading){
      getData();
      
    }
    else{
      isLoading(false);
      
    }
  },[])
 
  return (
  
  <>
            {state ? <Sidebuttons id={state} /> : null}
            
            <motion.tr variants={variants2}
            onClick={() => setSelected(true)}
            ></motion.tr>
      <div className='invoices-container'>
      <Plusbutton click={() => (modalOpen ? close() : open())}/>
      
      <AnimatePresence>
      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
      <ApplicationContext.Provider value={{state, setState}}>
      <div className='invoices'>
      {<Table type="invoice" data ={data}/>}
      </div>
      </ApplicationContext.Provider>
      
      </div>
  </>

  )
}

export default Invoices