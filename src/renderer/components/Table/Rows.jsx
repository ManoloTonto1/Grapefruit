import React,{useState, useContext} from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import { variants2 } from './Table';
import { Button } from "./Button";
import { Data } from "./Data";
import Document from "../Templates/Invoices/Document";
import Modal from '../Templates/Invoices/Modal/DocumentModal';
import { ApplicationContext } from '../Routes/Invoices';

  
export function Rows({data}) {
    
    const {state, setState} = useContext(ApplicationContext);
    data = data.meta;
    return (
        <>
            <motion.tr variants={variants2}
            onClick={() => setState(data.id)}	
            
            >
                <Data data={data.id} />
                <Data data={data.name} />
                <Data data={data.created_at} />
                <Data data={data.updated_at} />
                
            </motion.tr>

        </>


    );
}
