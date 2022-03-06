import React from 'react'
import {motion} from 'framer-motion'

const fs = require('fs');
const path = require('path');
const dir = './data';

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

  const variants2 = {
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


function Rows(){
    return(
        <>



        <motion.tr variants={variants2}>
            <Data data="20056"/>
            <Data data="invoice1.gsi"/>
            <Data data="15 Marzo 2021"/>
            <Data data="15 Marzo 2021 18:58"/>
            <Button type="Preview"/>
            <Button type="Editar"/>
            <Button type="Borrar"/>

        </motion.tr>
        </>

        
    );
}
function Header(){
    return(
    <>
        <TH value="#"/>
        <TH value="Nombre de el Archivo"/>
        <TH value="Fecha Creada"/>
        <TH value="Fecha Modificada"/>
        <TH value="Preview"/>
        <TH value="Editar"/>
        <TH value="Borrar"/>
    </>


    );
}
function TH({value}){
    return(
        <motion.th>
            {value}
        </motion.th>
    );
}
function Data({data}){
    return(
        <motion.td>
            {data}
        </motion.td>
    );
}
function Button({type}){
    return(
        <motion.td>
            <motion.button>{type}</motion.button>
        </motion.td>
    );
}
function Whitespace(){
    return(
<>
<br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
</>

    )
}

function Table() {
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
            <Rows/>
            <Rows/>
            <Rows/>
            <Rows/>
            <Rows/>
            <Rows/>
            <Rows/>
            <Rows/>
            <Rows/>
            <Rows/>
            <Rows/>
            <Rows/>

        </motion.table>
        <Whitespace/>
        <Whitespace/>
    </motion.div>
  )
}

export default Table