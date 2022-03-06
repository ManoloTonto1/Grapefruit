import React from 'react';
import { TH } from "./TH";

export function Header() {
    return (
        <>
            <TH value="#" />
            <TH value="Nombre de el Archivo" />
            <TH value="Fecha Creada" />
            <TH value="Fecha Modificada" />
            <TH value="Preview" />
            <TH value="Editar" />
            <TH value="Borrar" />
        </>


    );
}
