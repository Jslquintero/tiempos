/**
   * @author: José López
   * @date: 11/30/2022
   * @description: Pagina de productos 
   * @Editor: José López
   * @dateUpdate: 12/21/2022
   * @descriptionUpdate: Mejora de tarjetas y se agregan botones para agregar y eliminar productos
   * @version: 1.0.3
   * @param
   * @tiempo Me tomo 6 horas y 30 minutos en 5 dias
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


    function click() {
        console.log("click");
    }

    const json = [
        {
            title: "Jugo verde",
            styleType: "product-card-image",
            img: greenJuice,
            headerStyle: 'grid product-card grid-cols-2 m-auto',
            imgStyle: 'product-card-image',
            bodyStyle: 'body',
            descriptionStyle: 'grid content-center',
            titleStyle: 'product-card-title text-center',
            subtitleStyle: 'product-card-subtitle text-center',
            addIcon: "fas fa-plus-circle text-center icon add-icon",
            delIcon: "fas fa-minus-circle text-center icon delete-icon "
        }, {
            title: "Jugo de naranja",
            styleType: "product-card-image",
            img: orangeJuice,
            headerStyle: 'grid product-card grid-cols-2 m-auto',
            imgStyle: 'product-card-image',
            bodyStyle: 'body',
            descriptionStyle: 'grid content-center',
            titleStyle: 'product-card-title text-center',
            subtitleStyle: 'product-card-subtitle text-center',
            addIcon: "fas fa-plus-circle text-center icon add-icon",
            delIcon: "fas fa-minus-circle text-center icon delete-icon "
        }, {
            title: "Jugo de fresa",
            styleType: "product-card-image",
            img: strawberryJuice,
            headerStyle: 'grid product-card grid-cols-2 m-auto',
            imgStyle: 'product-card-image',
            bodyStyle: 'body',
            descriptionStyle: 'grid content-center',
            titleStyle: 'product-card-title text-center',
            subtitleStyle: 'product-card-subtitle text-center',
            addIcon: "fas fa-plus-circle text-center icon add-icon",
            delIcon: "fas fa-minus-circle text-center icon delete-icon "
        }, {
            title: "Jugo de mango",
            styleType: "product-card-image",
            img: mangoJuice,
            headerStyle: 'grid product-card grid-cols-2 m-auto',
            imgStyle: 'product-card-image',
            bodyStyle: 'body',
            descriptionStyle: 'grid content-center',
            titleStyle: 'product-card-title text-center',
            subtitleStyle: 'product-card-subtitle text-center',
            addIcon: "fas fa-plus-circle text-center icon add-icon",
            delIcon: "fas fa-minus-circle text-center icon delete-icon "
        }
    ]

    const data = json.map((json) => {
        return (
            <Card styleType={
                    json.styleType
                }
                title={
                    json.title
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
                }
                addIcon={
                    json.addIcon
                }
                delIcon={
                    json.delIcon
                }/>
        )
    });


    return (
        <>
            <Navigation/>

            <div className='w-90 m-auto mt-10'>
                <div className='grid grid-70-30 m-auto '>
                    <div className='grid grid grid-cols-2 w-90 m-auto '>
                        {data} </div>

                    <div className='grid grid-cols-1 '>
                        <h1>Info</h1>
                    </div>

                    <div className='grid grid-cols-3 grid-gap-2 w-90 '>
                        {data} </div>

                </div>
            </div>

        </>
    );
}
