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

import React from 'react';
import Card from './Card';

import greenJuice from "../../assets/Images/drinks/greenJuice.png";
import orangeJuice from "../../assets/Images/drinks/orangeJuice.png";
import strawberryJuice from "../../assets/Images/drinks/strawberryJuice.png";
import mangoJuice from "../../assets/Images/drinks/mangoJuice.png";

export default function CardApi(props) {

    const tarjetas = [{
        title: "Titulo 1",
        subtitle: "Subtitulo 1",
        img: greenJuice
    },
    {
        title: "Titulo 2",
        subtitle: "Subtitulo 2",
        img: orangeJuice
    },
    {
        title: "Titulo 3",
        subtitle: "Subtitulo 3",
        img: strawberryJuice
    },
    {
        title: "Titulo 4",
        subtitle: "Subtitulo 4",
        img: mangoJuice
    }

    ]
    const data = tarjetas.map((tarjeta) => {
        return (
            <Card styleType={
                tarjeta.styleType
            }
                title={
                    tarjeta.title
                }
                subtitle={
                    tarjeta.subtitle
                }
                img={
                    tarjeta.img
                }
            />

        )
    });

    return data;
}