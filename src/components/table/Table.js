/**
   * @author: José López
   * @date: 12/06/2022
   * @description: componente de tabla para mostrar datos
   * @Editor: José López
   * @dateUpdate: 
   * @descriptionUpdate: 
   * @version: 1.0.0
   * @param{producto, costo, cantidad}props
   * @tiempo Me tomo 3 horas  en 1 dias
 */


import React from "react";
import {Link} from "react-router-dom";


export default function Table(props) {


    return (
        <> {
            props.data.map((item, id) => {
                return (
                    <tr key={id}>
                        <td className="text-center">
                            {
                            item.producto
                        }</td>
                        <td className="text-center">
                            {
                            item.costo
                        }</td>
                        <td className="text-center">
                            {
                            item.cantidad
                        }</td>
                        <td className="text-lef">
                            <Link to="/" className="action">
                                <i className="fas fa-trash-alt delete-icon" i/>
                            </Link>

                            <Link to="/" className="action">
                                <i className="fas fa-edit edit-icon" i/>
                            </Link>

                            <Link to="/" className="action">
                                <i className="fas fa-plus add-icon" i/>
                            </Link>
                        </td>
                    </tr>
                )
            })
        } </>
    );
}
