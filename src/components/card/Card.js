/**
   * @author: José López
   * @date: 12/2/2022
   * @description: Carta de bebidas
   * @Editor: José López
   * @dateUpdate: 
   * @descriptionUpdate: 
   * @version: 1.0.2
   * @param{logo, imagenHorizontalRedesSociales}props
   * @tiempo Me tomo  horas tiempo en dias
 */

import React from "react";
import { Link } from "react-router-dom";


export default function Card(props) {

    return (
        <>
            <div className="grid content-center card card-background">
                <div className="card content-center">
                    <Link to='/' ><img className="card-image" src={props.img} alt="img" /></Link>
                </div>
                <div className="card content-center">
                    <h1 className="card-title text-center">{props.title}</h1>
                    <h2 className="card-description text-center">{props.subtitle}</h2>
                </div>
            </div>
        </>
    );
}
