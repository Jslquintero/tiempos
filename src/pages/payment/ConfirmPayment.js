/**
   * @author: José López
   * @date: 11/30/2022
   * @description: Pagina de Confirmacion de Pago
   * @Editor: José López
   * @dateUpdate: 12/05/2022
   * @descriptionUpdate: Culminacion de la pagina
   * @version: 1.0.2
   * @param
   * @tiempo Me tomo 6 horas en 2 dias
 */

import React, { useEffect, useState } from "react";
import Navigation from "../../components/nav/Navegation";
import Select from "../../components/select/Select";
import axios from "axios";

export default function ConfirmPayment() {

    //TODO: Arreglar el select
    const apiUrl = "https://api.first.org/data/v1";

    let [countries, setCountries] = useState([]);

    const country = axios.create({ baseURL: apiUrl });

    useEffect(() => {
        getCountryList();
    });

    async function getCountryList() {

        const response = await country.get('/countries').then
            ((data) => {
                setCountries(data);
            });
        console.log(countries);

        return response;

    }


    return (<>
        <Navigation />
        <div className="grid content-center">
            <h1>Confirmar Pago</h1>
        </div>
        <div className="grid grid-gap-2">
            <form className="form grid content-center grid-gap-2">

                <div className="grid grid-row content-left">
                    <div className="grid grid-cols-1">
                        <input className="input size" size={55} type="text" id="card" name="card" placeholder="Número de tarjeta" />
                    </div>
                </div>

                <div className="grid grid-row">
                    <div className="grid grid-cols-2 grid-gap-2">
                        <input className="input" type="text" id="date" name="date" placeholder="Caducidad" />
                        <input className="input" type="text" id="cvc" name="cvc" placeholder="CVC" />
                    </div>
                </div>

                <div className="grid grid-row">
                    <div className="grid grid-cols-1">
                        <Select styleType="select" selectName="paises" selectId="select"
                            opciones={[
                                { id: 1, nombre: "Argentina" },
                                { id: 2, nombre: "Panamá" },
                                { id: 3, nombre: "México" },
                                { id: 4, nombre: "Colombia" },
                                { id: 5, nombre: "Perú" },
                                { id: 6, nombre: "Chile" },
                                { id: 7, nombre: "Ecuador" },
                            ]} />
                    </div>
                </div>


            </form>

            <div className="grid grid-cols-1 ml-40 mr-40">
                <button className="btn">Continuar</button>
            </div>

        </div>
    </>);

}
