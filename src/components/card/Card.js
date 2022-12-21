/**
   * @author: José López
   * @date: 12/2/2022
   * @description: Carta de bebidas
   * @Editor: José López
   * @dateUpdate: 12/21/2022
   * @descriptionUpdate:  nuevos paramentros y nueva estructura
   * @version: 1.0.5
   * @param{headerStyle, bodyStyle, img, descriptionStyle, title, subtitle, imgStyle}props
   * @tiempo Me tomo  horas  en dias
 */

import React from "react";
import {Link} from "react-router-dom";


export default function Card(props) {

    return (
        <>
            <div className={
                props.headerStyle
            }>
                <div className={
                    props.bodyStyle
                }>
                    <Link to='/'><img className={
                                props.imgStyle
                            }
                            src={
                                props.img
                            }
                            alt="img"/></Link>
                </div>
                <div className={
                    props.descriptionStyle
                }>
                    <h1 className={
                        props.titleStyle
                    }>
                        {
                        props.title
                    }</h1>
                    <h2 className={
                        props.subtitleStyle
                    }>
                        {
                        props.subtitle
                    }</h2>
                </div>

                <i class={
                        props.addIcon
                    }
                    onClick={
                        props.addOnClick
                }></i>

                <i class={
                        props.delIcon
                    }
                    onClick={
                        props.removeOnClick
                }></i>

            </div>
        </>
    );
}
// fas fa-plus-circle
// fas fa-minus-circle
