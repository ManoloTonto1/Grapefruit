import React from 'react';
import { motion } from 'framer-motion';



export function Button({ type, onClick }) {
    return (
        <motion.td>
            <motion.button
            onClick={onClick} className={type}>{type}</motion.button>
        </motion.td>
    );
}
