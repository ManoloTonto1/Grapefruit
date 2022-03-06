import React from 'react';
import { motion } from 'framer-motion';
import { variants2 } from './Table';
import { Button } from "./Button";
import { Data } from "./Data";

export function Rows() {
    return (
        <>
            <motion.tr variants={variants2}>
                <Data data="20056" />
                <Data data="invoice1.gsi" />
                <Data data="15 Marzo 2021" />
                <Data data="15 Marzo 2021 18:58" />
                <Button type="Preview" />
                <Button type="Editar" />
                <Button type="Borrar" />

            </motion.tr>
        </>


    );
}
