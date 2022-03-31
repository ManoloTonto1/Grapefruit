import React,{useEffect, useRef, useState, useCallback} from 'react'
import {motion} from 'framer-motion';
const fs = require('fs');
import logo from "../../../../assets/icon.png";
import { TextInput } from '../misc/TextInput';
import { NumberInput } from '../misc/NumberInput';
import { ToggleSwitch } from '../misc/ToggleSwitch';
import { Whitespace } from '../Table/Whitespace';
const { dialog } = window.require('electron');
const ipc = window.require("electron").ipcRenderer;


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
          y: { stiffness: 1000 }
        }
      }
  };

function Image(props){
    return(
        <>
        <motion.div className='text-container' variants={variants2}>
        <motion.label className='label' style={{border: "none"}}>{props.label}</motion.label>
        <motion.div>
            <motion.img className='logo' src={logo} alt="logo.png"/>
            <br></br>
            <motion.button className="file-upload" type="file" id="upload"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={uploadImage}>Cambiar logo</motion.button>
            
        </motion.div>

        </motion.div>
        </>
    )
}

const uploadImage = () => {
// If the platform is 'win32' or 'Linux'
if (process.platform !== 'darwin') {
  // Resolves to a Promise<Object>
ipc.send('open-file-dialog'); 
}
    
}

function toDecimal(num){
    return parseFloat(num).toFixed(2);
}




function Settings() {
    const [settings, setSettings] = useState({});
    const [loading, isLoading] = useState(true);
    const getSettings = () => {

        let rawdata = fs.readFileSync('./src/data/settings.json');
    
        isLoading(false);
        setSettings(JSON.parse(rawdata));
        
        
     
    }
    const handleSubmit = () => {
      console.log(settings);
      let data = JSON.stringify(settings);
      fs.writeFileSync('./src/data/settings.json', data);
      alert('Settings Saved');
    }
    const escFunction = useCallback((event) => {
      if (event.keyCode == 13) {
        handleSubmit();
        
      }
    }, []);
  
    useEffect(() => {
      document.addEventListener("keydown", escFunction);
  
      return () => {
        document.removeEventListener("keydown", escFunction);
      };
    }, [escFunction]);

  return (
      <>

    <motion.div className='settings-container'>
    <motion.div className='settings' 
    variants={variants}
    initial="closed"
    animate="open"
    exit="exit">

    <Image label="Logo:"/>
    <TextInput label="Nombre de la Compañia:"  value={loading ? getSettings() : settings.companyName} setter={(e)=>setSettings({...settings,companyName:e})} />
    <TextInput label="Direccion de la Compañia:" value={settings.companyAddress} setter={(e)=>setSettings({...settings,companyAddress:e})}/>
    <TextInput label="Numero Telefonico:"  value={settings.companyPhone} setter={(e)=>setSettings({...settings,companyPhone:e})}/>
    <TextInput label="Email:"  value={settings.companyEmail} setter={(e)=>setSettings({...settings,companyEmail:e})}/>
    <TextInput label="Website:"  value={settings.companyWebsite} setter={(e)=>setSettings({...settings,companyWebsite:e})}/>
    <NumberInput label="Ultimo Invoice:"  value={settings.lastInvoice} setter={(e)=>setSettings({...settings,lastInvoice:e})}/>
    <ToggleSwitch label="Auto-Save"  value={settings.autoSave} setter={(e)=>setSettings({...settings,autoSave:e})}/>
    <ToggleSwitch label="Auto-Save Direcciones"  value={settings.autoSaveAddresses} setter={(e)=>setSettings({...settings,autoSaveAddresses:e})}/>
    <ToggleSwitch label="Preguntar Donde Guardar"  value={settings.askToSave} setter={(e)=>setSettings({...settings,askToSave:e})}/>
    <ToggleSwitch label="Incluir Impuestos"  value={settings.includeTax} setter={(e)=>setSettings({...settings,includeTax:e})}/>
    <NumberInput label="Porcentaje De Impuestos:"  value={settings.taxRate} setter={(e)=>setSettings({...settings,taxRate:e})}/>

    <motion.button variants={variants2} className="button-save" onClick={handleSubmit}>Guardar</motion.button>
    <Whitespace/>
    <Whitespace/>
    </motion.div>
    </motion.div>

 


      </>

  )
}

export default Settings