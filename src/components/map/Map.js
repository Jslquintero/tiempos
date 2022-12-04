/**
   * @author: José López
   * @date: 12/03/2022
   * @description: Componente de Mapa
   * @Editor: José López
   * @dateUpdate: 
   * @descriptionUpdate: 
   * @version: 1.0.0
   * @param
   * @tiempo Me tomo 40 minutos tiempo en 1 dia
 */

import React from "react";
import { ReactBingmaps } from 'react-bingmaps';


export default function Map() {

    return (
        <>
            <ReactBingmaps
                bingmapKey="[{process.env.REACT_APP_BING_MAPS_KEY}]"
                center={[13.0827, 80.2707]}
            >
            </ReactBingmaps>
        </>
    );
}

