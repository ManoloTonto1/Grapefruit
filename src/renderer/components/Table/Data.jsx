import React from 'react';
import { motion } from 'framer-motion';



export function Data({ data }) {
    return (
        <motion.td>
            {data}
        </motion.td>
    );
}
