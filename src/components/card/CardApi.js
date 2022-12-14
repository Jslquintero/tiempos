/**
   * @author: José López
   * @date: 12/2/2022
   * @description: Carta de bebidas
   * @Editor: José López
   * @dateUpdate: 13/03/2022
   * @descriptionUpdate: nuevos implementacion de nuevos parametros para el componente
   * @version: 1.0.2
   * @param
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
        img: greenJuice,
        headerStyle:'grid content-center card card-background',
        imgStyle:'card-image',
        bodyStyle:'card content-center',
        descriptionStyle:'card content-center',
        titleStyle:'card-title text-center',
        subtitleStyle:'card-description text-center',
    },
    {
        title: "Titulo 2",
        subtitle: "Subtitulo 2",
        img: orangeJuice,
        headerStyle:'grid content-center card card-background',
        imgStyle:'card-image',
        bodyStyle:'card content-center',
        descriptionStyle:'card content-center',
        titleStyle:'card-title text-center',
        subtitleStyle:'card-description text-center',
    },
    {
        title: "Titulo 3",
        subtitle: "Subtitulo 3",
        img: strawberryJuice,
        headerStyle:'grid content-center card card-background',
        imgStyle:'card-image',
        bodyStyle:'card content-center',
        descriptionStyle:'card content-center',
        titleStyle:'card-title text-center',
        subtitleStyle:'card-description text-center',
    },
    {
        title: "Titulo 4",
        subtitle: "Subtitulo 4",
        img: mangoJuice,
        headerStyle:'grid content-center card card-background',
        imgStyle:'card-image',
        bodyStyle:'card content-center',
        descriptionStyle:'card content-center',
        titleStyle:'card-title text-center',
        subtitleStyle:'card-description text-center',
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
                headerStyle={
                    tarjeta.headerStyle
                }
                imgStyle={
                    tarjeta.imgStyle
                }
                bodyStyle={
                    tarjeta.bodyStyle
                }
                descriptionStyle={
                    tarjeta.descriptionStyle
                }
                titleStyle={
                    tarjeta.titleStyle
                }
                subtitleStyle={
                    tarjeta.subtitleStyle
                }
            />

        )
    });

    return data;
}