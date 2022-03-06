import React from 'react';
import { motion } from 'framer-motion';
import { variants2 } from './Table';
import { Button } from "./Button";
import { Data } from "./Data";

export function Rows({data}) {
    data = data.meta;
    return (
        <>
            <motion.tr variants={variants2}>
                <Data data={data.id} />
                <Data data={data.name} />
                <Data data={data.created_at} />
                <Data data={data.updated_at} />
                <Button type="Preview" />
                <Button type="Editar" />
                <Button type="Borrar" />

            </motion.tr>
        </>


    );
}
