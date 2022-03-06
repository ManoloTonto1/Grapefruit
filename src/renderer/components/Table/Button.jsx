import React from 'react';
import { motion } from 'framer-motion';



export function Button({ type }) {
    return (
        <motion.td>
            <motion.button className={type}>{type}</motion.button>
        </motion.td>
    );
}
