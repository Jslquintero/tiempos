/**
   * @author: José López
   * @date: 11/30/2022
   * @description: Pagina de registro de usuario
   * @Editor: José López
   * @dateUpdate: 12/04/2022
   * @descriptionUpdate: culminacion de la pagina
   * @version: 1.0.1
   * @param
   * @tiempo Me tomo 30 minutos en 1 dias
 */

import React from "react";
import Slogan from "../../components/login/Slogan";
import ForgotRegister from "../../components/login/ForgotRegister";

export default function Register() {
    return (<>
        <div>
            <div className="grid grid-cols-2">
                <Slogan opciones={[
                    {
                        styleType: "grid content-center slogan ",
                        text: "No solo es un jugo, es nutribvida"
                    },
                    {
                        styleType: "grid content-center slogan",
                        text: "Estamos para nutrir tu vida"
                    }
                ]} />
                <div className="form grid content-center mt-10 w-60 h-90">
                    <h1>Registro</h1>
                    <form className="grid w-80">

                        <div className="form-group">
                            <label className="label" htmlFor="name">Nombre</label>
                            <input className="input" type="text" name="name" placeholder="Nombre" />
                        </div>

                        <div className="form-group">
                            <label className="label" htmlFor="lastname">Apellido</label>
                            <input className="input" type="text" name="lastname" placeholder="Apellido" />
                        </div>

                        <div className="form-group">
                            <label className="label" htmlFor="phone">Celular</label>
                            <input className="input" type="text" name="phone" placeholder="Celular" />
                        </div>

                        <div className="form-group">
                            <label className="label" htmlFor="email">Correo</label>
                            <input className="input" type="text" name="email" placeholder="Correo" />
                        </div>

                        <div className="form-group">
                            <label className="label" htmlFor="password">Contraseña</label>
                            <input className="input" type="password" name="password" placeholder="Contraseña" />
                        </div>

                        <div className="form-group">
                            <ForgotRegister opciones={[
                                {
                                    styleType: "link grid",
                                    route: "/",
                                    text: "¿Ya tienes cuenta? Inicia Sesión"
                                }
                            ]} />
                        </div >

                        <div className="form-group">
                            <button className="btn w-100" type="submit">Registarse</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>);
}