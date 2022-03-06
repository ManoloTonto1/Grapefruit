import React,{useEffect, useRef, useState} from 'react'
import Switch from '../Switch';
import {motion} from 'framer-motion';
const fs = require('fs');
import logo from "../../../../assets/icon.png";


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
          y: { stiffness: 1000 }
        }
      }
  };

function TextInput(props){
    return(
        <>
        <motion.div className='text-container' variants={variants2}>
            <motion.label className='label'>{props.label}</motion.label>
            <motion.input className="input" type="text" defaultValue={props.value} />
        </motion.div>
        </>
    )
}
function NumberInput(props){
    return(
        <>
        <motion.div className='text-container' variants={variants2}>
            <motion.label className='label'>{props.label}</motion.label>
            <motion.input className="input-small" type="number" step=".01" defaultValue={props.value} />
        </motion.div>
        </>
    )
}

function ToggleSwitch(props){
   return( 
   <>
    <motion.div className='text-container' variants={variants2}>
        <motion.label  className='label' >{props.label}</motion.label>
        <motion.div>
        <Switch value={props.value}/>
        </motion.div>
        
    </motion.div>
    </>
   )
}

function Image(props){
    return(
        <>
        <motion.div className='text-container' variants={variants2}>
        <motion.label className='label' style={{border: "none"}}>{props.label}</motion.label>
        <motion.div>
            <motion.img className='logo' src={logo} alt="logo.png"/>
            <br></br>
            <motion.input type="file" id="upload" hidden/>
            <motion.label 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className='file-upload' htmlFor="upload">Cambiar Logo</motion.label>
        </motion.div>

        </motion.div>
        </>
    )
}

function toDecimal(num){
    return parseFloat(num).toFixed(2);
}




function Settings() {
    const [settings, setSettings] = useState({});
    const [loading, isLoading] = useState(true);
    const settingsref = useRef([]);
    const getSettings = () => {

        let rawdata = fs.readFileSync('./src/data/settings.json');
    
        isLoading(false);
        setSettings(JSON.parse(rawdata));
     
    }
    const handleSubmit = () => {
      let data = JSON.stringify(settings);
      fs.writeFileSync('./src/data/settings.json', data);
      alert('Settings Saved');
    }

  return (
      <>

    <motion.div className='settings-container'>
    <motion.div className='settings' 
    variants={variants}
    initial="closed"
    animate="open"
    exit="exit">

    <Image label="Logo:"  value={settings.LogoURL}/>
    <TextInput label="Nombre de la Compañia:" value={loading ? getSettings() : settings.companyName}/>
    <TextInput label="Direccion de la Compañia:" value={settings.companyAddress}/>
    <TextInput label="Numero Telefonico:" value={settings.companyPhone}/>
    <TextInput label="Email:" value={settings.companyEmail}/>
    <TextInput label="Website:" value={settings.companyWebsite}/>
    <NumberInput label="Ultimo Invoice:" value={settings.lastInvoice}/>
    <ToggleSwitch label="Auto-Save" value={settings.autoSave}/>
    <ToggleSwitch label="Auto-Save Direcciones" value={settings.autoSaveAddresses}/>
    <ToggleSwitch label="Preguntar Donde Guardar" value={settings.askToSave}/>
    <ToggleSwitch label="Incluir Impuestos" value={settings.includeTax}/>
    <NumberInput label="Porcentaje De Impuestos:" value={settings.taxRate}/>

    <motion.button variants={variants2} className="button-save" onClick={handleSubmit}>Guardar</motion.button>

    </motion.div>
    </motion.div>

 


      </>

  )
}

export default Settings