import React,{useContext} from 'react'
import {motion} from 'framer-motion'
import { Rows } from './Rows';
import { Header } from './Header';
import { Whitespace } from './Whitespace';
import { ApplicationContext } from '../Routes/Invoices';

const fs = require('fs');
const path = require('path');
const dir = './data';
const { dialog } = require('electron')

function init() {
  //return fs.readdirSync(dir).filter(name => path.extname(name) === '.json').map(name => require(path.join(dir, name)));
}
const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1, delayChildren: 0.2 }
    }
  };

  export const variants2 = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    },
    exit: {
        y: 50,
        opacity: 0,
        transition: {
          y: { stiffness: 1000 },
          duration: 0.5
        }
      }
  };

  


function Table({data}) {
  const {state, setState} = useContext(ApplicationContext);
  return (
    <motion.div>
        <motion.table className='table'
        variants={variants}
        initial="closed"
        animate="open"
        exit="exit"> 
        <motion.thead variants={variants2}>
        <motion.tr variants={variants2}>
        <Header/>
        </motion.tr>
        </motion.thead>

        <motion.tbody>
            {data.map((row) => (
                <Rows data={row} key={row.meta.id}/>
            ))}

        </motion.tbody>


        </motion.table>
        <Whitespace/>
        <Whitespace/>
    </motion.div>
  )
}

export default Table