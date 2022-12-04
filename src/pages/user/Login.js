/**
   * @author: José López
   * @date: 11/30/2022
   * @description: Pagina de login de usuario
   * @Editor: José López
   * @dateUpdate: 12/04/2022
   * @descriptionUpdate: culminacion de la pagina
   * @version: 1.0.1
   * @param
   * @tiempo Me tomo 1  hora en 1 dias
 */

import React from "react";
import Slogan from "../../components/login/Slogan";
import ForgotRegister from "../../components/login/ForgotRegister";

export default function Login() {

    return (<>
        <div>
            <div className="grid grid-cols-2">
                <Slogan opciones={[
                    {
                        styleType: "grid content-center slogan",
                        text: "No solo es un jugo, es nutribvida"
                    },
                    {
                        styleType: "grid content-center slogan",
                        text: "Estamos para nutrir tu vida"
                    }
                ]} />

                <div className="form grid content-center mt-20 w-60 h-90">
                    <h1>¡Bienvenido!</h1>
                    <form className="grid w-80">
                        <div className="form-group">
                            <label className="label" htmlFor="user">Usuario</label>
                            <input className="input" type="text" name="user" placeholder="Correo o Celular" />
                        </div>
                        <div className="form-group">
                            <label className="label" htmlFor="password">Contraseña</label>
                            <input className="input" type="password" name="password" placeholder="Contraseña" />
                        </div>
                        <ForgotRegister opciones={[
                            {
                                styleType: "link grid",
                                route: "/user-forgot-password",
                                text: "¿Olvidaste tu contraseña?"
                            },
                            {
                                styleType: "link ml-20",
                                route: "/user-register",
                                text: "¿No tienes cuenta? Registrate"
                            }
                        ]} />
                        <div className="form-group">
                            <button className="btn w-100" type="submit">Iniciar Sesión</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>);
}
