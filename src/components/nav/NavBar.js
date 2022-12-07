/**
   * @author: José López
   * @date: 11/30/2022
   * @description: Pagina de Inicio donde se muestra la informacion principal del cliente
   * @Editor: José López
   * @dateUpdate: 12/06/2022
   * @descriptionUpdate: actualizacion de la ruta en el carrito de compras
   * @version: 1.0.1
   * @param{route, ref }props
   * @tiempo Me tomo 4 horas y 28 minutos  en 3 dias
 */

import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/Images/logo/logo.jpg'


export default function NavBar(props) {

    const itemsLinks = props.param.map((item) => <Link className="bar-link pr-20 pl-20" to={item.route}>{item.ref}</Link>);


    return (<div className="bar grid content-center">
        <div className="bar-default grid w-90">
            <div className="bar-logo my-auto">
                <Link to='/'><img className="img-logo" src={logo} alt="logo" /></Link>
            </div>
            <div className="bar-items mt-10">
                {itemsLinks}
            </div>
            <div className="bar-icon content-right ">
                <Link to='/cart'>
                    <i class="fa fa-shopping-cart" aria-hidden="true" />
                </Link>
            </div>
        </div>
    </div>);
}
