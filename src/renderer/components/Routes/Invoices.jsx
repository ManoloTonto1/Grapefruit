import React,{useState} from 'react'
import Table from '../Table/Table'
import { Plusbutton } from '../misc/Plusbutton'
import Modal  from '../Modal/Modal';
import { AnimatePresence } from 'framer-motion';



function Invoices() {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true); 
  return (
  
  <>
      <div className='invoices-container'>
      <Plusbutton click={() => (modalOpen ? close() : open())}/>
      <AnimatePresence>
      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>

      <div className='invoices'>
      {<Table type="invoice"/>}
      </div>
      </div>
  </>

  )
}

export default Invoices