import React from 'react';
import { motion } from 'framer-motion';



export function TH({ value }) {
    return (
        <motion.th>
            {value}
        </motion.th>
    );
}
