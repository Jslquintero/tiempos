/**
   * @author: José López
   * @date: 12/04/2022
   * @description: Componente del logo y slogan de la pagina de login
   * @Editor: José López
   * @dateUpdate: 
   * @descriptionUpdate: 
   * @version: 1.0.0
   * @param{styleType, text }props
   * @tiempo Me tomo 30 minutos  tiempo en 1 dia
 */

import React from "react";
import logo from "../../assets/Images/logo/logo.jpg";

export default function Slogan(props) {

    const description = props.opciones.map((item) =>

        <h3 className={item.styleType}>{item.text}</h3>
    );

    return (
        <>
            <div className="grid mb-20">
                <img className="grid content-center login-logo mt-10" src={logo} alt="logo" />,
                {description}
            </div>
        </>);
}
