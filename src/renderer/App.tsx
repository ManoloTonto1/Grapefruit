import { MemoryRouter as Route } from 'react-router-dom';
import React, {createContext, useState,useEffect} from 'react'
import './Styles/App.css';
import Router from './components/Routes/Router';
const ipc = window.require('electron').ipcRenderer;

export const GlobalSettings = createContext({});

let getSettings = () =>{
  
  ipc.send('get-settings');
  return ipc.on("get-settings",(event, args)=>{
    return args
  })
  
  
}



export default function App() {
  const [globalSettings, setGlobalSettings] = useState();
  const [language, setlanguage] = useState();
  




  
  return (
    <>
    <Route>
      


        <GlobalSettings.Provider value={{globalSettings, setGlobalSettings,language, setlanguage }}>
           {/* start the router */}
        <Router/>
        </GlobalSettings.Provider>
      
    </Route>
    </>

  );
}
