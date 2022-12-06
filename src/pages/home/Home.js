/**
   * @author: José López
   * @date: 11/30/2022
   * @description: Pagina de Inicio donde se muestra la informacion principal del cliente
   * @Editor: José López
   * @dateUpdate: 12/05/2022
   * @descriptionUpdate: cambio del select hardcoded por un select dinamico
   * @version: 1.0.2
   * @param{logo, imagenHorizontalRedesSociales}props
   * @tiempo Me tomo 9 horas y 5 minutos en 2 dias
 */


// TODO: Implementar navegador, implementar 6 componentes individuales, componente repetido:Tarjeta,3 compoenentes dividios a la mitad

import React from "react";

import Navigation from "../../components/nav/Navegation";
import CardApi from "../../components/card/CardApi";
import Map from "../../components/map/Map";
import logo from '../../assets/Images/logo/logo.jpg'
import Hero from "../../assets/Images/hero/hero.png";
import Select from "../../components/select/Select";

export default function Home() { // constante donde defino mis elmentos tarjetas del componente tal  con propiedades tal
    return (<>

        <div>
            <Navigation />
            <div className="client grid mt-10">

                <div className="grid grid-cols-2">

                    <div className="grid content-left">
                        <img className="client-photo grid" src={logo} alt="client" />
                    </div>

                    <div className="grid client-description content-center mr-10">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac ut consequat semper viverra nam libero justo. Nulla facilisi etiam dignissim diam quis. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Habitant morbi tristique senectus et netus et malesuada. Arcu dictum varius duis at consectetur lorem donec massa. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Augue interdum velit euismod in pellentesque massa placerat. Lorem ipsum dolor sit amet consectetur adipiscing elit. Eget duis at tellus at urna condimentum mattis pellentesque. Sed libero enim sed faucibus turpis in eu mi bibendum. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Eget arcu dictum varius duis at consectetur lorem donec. Eget aliquet nibh praesent tristique. Sem integer vitae justo eget magna.
                        </p>
                    </div>
                </div>
                <div className="grid content-center content-right mr-10">
                    <button className="btn grid content-center">Crear NutriBvida</button>
                </div>

            </div>
            <div className="grid grid-cols-4 grid-gap-2 bg-color content-center mx-auto w-100 mt-10">
                <CardApi />
            </div>

            <div>

                <h1 className="grid content-center">NutriBvida</h1>
                <h3 className="grid content-center">No Vendemos tradicionales jugos o licuados, damos un plus:</h3>
                <h3 className="grid content-center">Creamos un NutriBvida por cada cliente, de acuerdo a sus necesidades nutricionales, preosupuestosy gustos</h3>
                <div className="grid grid-gap-2 content-center  mx-auto w-100">
                    <img className="mx-auto w-50 h-90" src={Hero} alt="client" />
                </div>
            </div>

            <div className="grid grid-cols-2 mt-10 mb-10">
                <div>
                    <img className="mx-auto" src={logo} alt="client" />
                </div>
                <div className="grid content-center">
                    <h1 className="grid content-center">Contáctanos</h1>
                    <form className="grid grid-gap-2 content-center w-100">
                        <div className="grid grid-cols-2 grid-gap-3">
                            <input className="input grid content-center w-100 m-1 p-1 border-radius border" type="text" placeholder="Nombre" />
                            <input className="input grid content-center w-100 m-1 p-1 border-radius border" type="text" placeholder="Correo" />
                        </div>

                        <di className="grid grid-cols-1 w-100">
                            <input className="input grid content-center w-100 m-1 p-1 border-radius border" type="text" placeholder="Telefono" />
                        </di>
                        <div className="grid grid-cols-1">
                            <Select styleType="home-select  m-1 p-1 border-radius border"
                                selectName="lugar" selectId="selectId"
                                opciones={[
                                    { id: 1, nombre: "Lugar 1" },
                                    { id: 2, nombre: "Lugar 2" },
                                    { id: 3, nombre: "Lugar 3" },
                                    { id: 4, nombre: "Lugar 4" },
                                ]}
                            />


                        </div>

                        <div className="grid grid-cols-1 w-100">
                            <textarea className="textarea grid content-center w-100 m-1 p-1 border-radius border" type="text" placeholder="Mensaje" />
                        </div>

                        <div className="grid grid-cols-1">
                            <button className="btn grid content-center">Enviar</button>
                        </div>
                    </form>
                </div>

            </div>

            <div className="grid grid-cols-2 mt-10 mb-10">
                <div className="grid content-center">
                    <h1 className="grid content-center">Ubicanos</h1>
                    <div className="grid content-center ml-10">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac ut consequat semper viverra nam libero justo. Nulla facilisi etiam dignissim diam quis. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Habitant morbi tristique senectus et netus et malesuada. Arcu dictum varius duis at consectetur lorem donec massa. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Augue interdum velit euismod in pellentesque massa placerat. Lorem ipsum dolor sit amet consectetur adipiscing elit. Eget duis at tellus at urna condimentum mattis pellentesque. Sed libero enim sed faucibus turpis in eu mi bibendum. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Eget arcu dictum varius duis at consectetur lorem donec. Eget aliquet nibh praesent tristique. Sem integer vitae justo eget magna.
                        </p>
                    </div>
                </div>

                <div className="grid mr-20 ml-20">
                    <Map />
                </div>
            </div>


            {/* Footer (Componente Global) */}
            <div></div>

        </div>

    </>);
}
