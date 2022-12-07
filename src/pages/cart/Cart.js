/**
   * @author: José López
   * @date: 11/30/2022
   * @description: Pagina de Inicio donde se muestra la informacion principal del cliente
   * @Editor: José López
   * @dateUpdate: 12/06/2022
   * @descriptionUpdate: Creacion e implementacion del  componente table para mostrar datos de forma dinamica y reutilizable
   * @version: 1.0.2
   * @param
   * @tiempo Me tomo 7 horas tiempo en 2 dias
 */

import React from "react";
import Navigation from "../../components/nav/Navegation";
import Table from "../../components/table/Table";
import {useNavigate} from 'react-router-dom';

export default function Cart() {

    const navigate = useNavigate();


    return (
        <>
            <Navigation/>
            <div className="grid content-center">
                <h1>Carrito</h1>
            </div>
            <div className="grid grid-gap-2">

                <table className="content-center">
                    <thead>
                        <tr>
                            <th className="text-center">Producto</th>
                            <th className="text-center">Costo</th>
                            <th className="text-center">Cantidad</th>
                            <th className="text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Table data={
                            [
                                {
                                    producto: "Producto 1",
                                    costo: "100",
                                    cantidad: "1"
                                }, {
                                    producto: "Producto 2",
                                    costo: "200",
                                    cantidad: "2"
                                }
                            ]
                        }/>

                    </tbody>
                </table>
                <div className="grid grid-cols-1 ml-40 mr-40">
                    <button className="btn"
                        onClick={
                            () => navigate("/payment")
                    }>Continuar</button>
                </div>

            </div>
        </>
    );
}
