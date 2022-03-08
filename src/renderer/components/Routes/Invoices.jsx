import React,{useState, useEffect} from 'react'
import Table from '../Table/Table'
import { Plusbutton } from '../misc/Plusbutton'
import Modal  from '../Modal/Modal';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const fs = require('fs');





function Invoices() {


  
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
      <div className='invoices-container'>
      <Plusbutton click={() => (modalOpen ? close() : open())}/>
      
      <AnimatePresence>
      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>

      <div className='invoices'>
      {<Table type="invoice" data ={data}/>}
      </div>
      </div>
  </>

  )
}

export default Invoices