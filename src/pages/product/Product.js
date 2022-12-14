/**
   * @author: José López
   * @date: 11/30/2022
   * @description: Pagina de Inicio donde se muestra la informacion principal del cliente
   * @Editor: José López
   * @dateUpdate: 
   * @descriptionUpdate: Se cambio el logo del cliente
   * @version: 1.0.2
   * @param
   * @tiempo Me tomo 4 horas tiempo en 1 dias
 */

import React from 'react';
import Navigation from '../../components/nav/Navegation';
import Card from '../../components/card/Card';

// imagenes
import greenJuice from "../../assets/Images/drinks/greenJuice.png";
import orangeJuice from "../../assets/Images/drinks/orangeJuice.png";
import strawberryJuice from "../../assets/Images/drinks/strawberryJuice.png";
import mangoJuice from "../../assets/Images/drinks/mangoJuice.png";

export default function Product() {

    const json = [
        {
            title: "Titulo 1",
            subtitle: "Subtitulo 1",
            styleType: "product-card-image",
            img: greenJuice,
            headerStyle: 'grid product-card grid-cols-2',
            imgStyle: 'product-card-image',
            bodyStyle: 'body',
            descriptionStyle: '',
            titleStyle: 'product-card-title text-center',
            subtitleStyle: 'product-card-subtitle text-center'
        }, {
            title: "Titulo 2",
            subtitle: "Subtitulo 2",
            styleType: "product-card-image",
            img: orangeJuice,
            headerStyle: 'grid product-card grid-cols-2',
            imgStyle: 'product-card-image',
            bodyStyle: 'body',
            descriptionStyle: '',
            titleStyle: 'product-card-title text-center',
            subtitleStyle: 'product-card-subtitle text-center'
        }, {
            title: "Titulo 3",
            subtitle: "Subtitulo 3",
            styleType: "product-card-image",
            img: strawberryJuice,
            headerStyle: 'grid product-card grid-cols-2',
            imgStyle: 'product-card-image',
            bodyStyle: 'body',
            descriptionStyle: '',
            titleStyle: 'product-card-title text-center',
            subtitleStyle: 'product-card-subtitle text-center'
        },
    ]

    const data = json.map((json) => {
        return (
            <Card styleType={
                    json.styleType
                }
                title={
                    json.title
                }
                subtitle={
                    json.subtitle
                }
                img={
                    json.img
                }

                headerStyle={
                    json.headerStyle
                }
                imgStyle={
                    json.imgStyle
                }
                bodyStyle={
                    json.bodyStyle
                }
                descriptionStyle={
                    json.descriptionStyle
                }
                titleStyle={
                    json.titleStyle
                }
                subtitleStyle={
                    json.subtitleStyle
                }/>
        )
    });


    return (
        <>
            <Navigation/>

            <div className='container'>
                <div className='grid grid-row'>
                    <h1 className='grid content-center'>Product</h1>
                </div>

                <div className='grid grid-row'>
                    <div className='grid grid-col content-right'>
                        <h1>test</h1>
                    </div>
                    <div className='grid grid-cols-3 w-80 content-left'>
                        {data} </div>

                </div>
            </div>

        </>
    );
}
