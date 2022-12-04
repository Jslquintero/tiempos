/**
   * @author: José López
   * @date: 12/04/2022
   * @description: Componente para los links de recuperar contraseña y registrarse
   * @Editor: José López
   * @dateUpdate: 
   * @descriptionUpdate: 
   * @version: 1.0.0
   * @param{styleType, route, text }props
   * @tiempo Me tomo 5 minutos  tiempo en 1 dia
 */

import React from "react";
import { Link } from "react-router-dom";

export default function ForgotRegister(props) {

    const linkToPages = props.opciones.map((item) =>
        <Link className={item.styleType} to={item.route}>{item.text}</Link>
    );

    return (
        <>
            <div className="form-group grid grid-cols-2 grid-gap-2">
                {linkToPages}
            </div>
        </>);
}
