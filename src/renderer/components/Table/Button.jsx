import React from 'react';
import { motion } from 'framer-motion';



export function Button({ type }) {
    return (
        <motion.td>
            <motion.button>{type}</motion.button>
        </motion.td>
    );
}
