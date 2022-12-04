/**
   * @author: José López
   * @date: 12/3/2022
   * @description: Componente que muestra el menu de navegacion de forma dinamica
   * @Editor: José López
   * @dateUpdate: 
   * @descriptionUpdate: 
   * @version: 1.0.0
   * @param
   * @tiempo Me tomo 7 minutos  en 1 dias
 */




import React from 'react';
import NavBar from "./NavBar";

export default function Navegation() {
    return (
        <>
            <NavBar param={[

                { ref: "Inicio", route: "/Home" },
                { ref: "Productos", route: "/Product" },
                { ref: "Información", route: "/About" },

            ]} />
        </>
    );
}