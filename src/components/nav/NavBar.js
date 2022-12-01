/**
   * @author: José López
   * @date: 11/30/2022
   * @description: Pagina de Inicio donde se muestra la informacion principal del cliente
   * @Editor: José López
   * @dateUpdate: 
   * @descriptionUpdate: Se cambio el logo del cliente
   * @version: 1.0.1
   * @param{logo, imagenHorizontalRedesSociales}props
   * @tiempo Me tomo 4 horas tiempo en 1 dias
 */

import React from "react";
import { Link } from "react-router-dom";

const items = ['Inicio', 'Productos', 'Acerca'];
const itemsLinks = items.map((item) => {
    return <a href="#" className="bar-link">{item}</a>;
});

export default function NavBar() {
    return (<div className="bar grid content-center">
        <div className="bar-default grid">
            <div className="bar-logo my-auto">
                <Link to='/'><img className="img-logo" src="https://i.postimg.cc/QxMPw1bm/logo.png" alt="logo" /></Link>
            </div>
            <div className="bar-items my-auto">
                {itemsLinks}
            </div>
            <div className="bar-icon content-right ">
                <Link to='/'>
                    <i class="fa fa-shopping-cart" aria-hidden="true" />
                </Link>
            </div>
        </div>
    </div>);
}
