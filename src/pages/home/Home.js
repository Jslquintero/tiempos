/**
   * @author: José López
   * @date: 11/30/2022
   * @description: Pagina de Inicio donde se muestra la informacion principal del cliente
   * @Editor: José López
   * @dateUpdate: 
   * @descriptionUpdate: Se cambio el logo del cliente
   * @version: 1.0.1
   * @param{logo, imagenHorizontalRedesSociales}props
   * @tiempo Me tomo 4 horas tiempo en 1 dias
 */


// TODO: Implementar navegador, implementar 6 componentes individuales, componente repetido:Tarjeta,3 compoenentes dividios a la mitad

import React from "react";

import NavBar from "../../components/nav/NavBar";

export default function Home() { // constante donde defino mis elmentos tarjetas del componente tal  con propiedades tal
    return (<>

        <div> {/* Navegador (Componente Global) */}
            <NavBar />
            {/* Componente 1, logo del lado izquierdo y derecho de quien es el cliente */}
            <div className="client grid">

                <div className="client-description grid my-auto">
                    <div>
                        <img className="client-photo grid" src="https://i.postimg.cc/QxMPw1bm/logo.png" alt="client" />
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac ut consequat semper viverra nam libero justo. Nulla facilisi etiam dignissim diam quis. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Habitant morbi tristique senectus et netus et malesuada. Arcu dictum varius duis at consectetur lorem donec massa. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Augue interdum velit euismod in pellentesque massa placerat. Lorem ipsum dolor sit amet consectetur adipiscing elit. Eget duis at tellus at urna condimentum mattis pellentesque. Sed libero enim sed faucibus turpis in eu mi bibendum. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Eget arcu dictum varius duis at consectetur lorem donec. Eget aliquet nibh praesent tristique. Sem integer vitae justo eget magna.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac ut consequat semper viverra nam libero justo. Nulla facilisi etiam dignissim diam quis. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Habitant morbi tristique senectus et netus et malesuada. Arcu dictum varius duis at consectetur lorem donec massa. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Augue interdum velit euismod in pellentesque massa placerat. Lorem ipsum dolor sit amet consectetur adipiscing elit. Eget duis at tellus at urna condimentum mattis pellentesque. Sed libero enim sed faucibus turpis in eu mi bibendum. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Eget arcu dictum varius duis at consectetur lorem donec. Eget aliquet nibh praesent tristique. Sem integer vitae justo eget magna.
                        </p>
                        <button className="btn grid content-center">Crear NutriBvida</button>
                    </div>

                </div>

            </div>
            {/* 4 tarjetas (Componente Global) */}
            <div></div>
            {/* Nombre del cliente y eslogan */}
            <div></div>
            {/* Imagen representativa */}
            <div></div>
            {/* Formulario contactanos */}
            <div></div>
            {/* Footer (Componente Global) */}
            <div></div>

        </div>

    </>);
}
