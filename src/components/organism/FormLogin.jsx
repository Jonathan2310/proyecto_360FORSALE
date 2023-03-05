import { useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import Logo from '../../assets/img/logoSinFondo.png'

import '../../assets/styles/formRegister.css'

function FormLogin() {

    const navigate = useNavigate();

    const handlerClick = (e)=> {
        e.preventDefault();
        navigate("/homeArrendador");
    }

    return ( 

            <div className="form_register">
                <Title>Inicio de Sesión</Title>
                <img src={Logo} alt="Logo de la empresa" className="logo_register" />
                <form>
                    <WrapperInput msn="Correo" type="E-mail" placeholder="" />
                    <WrapperInput msn="Password" type="password" placeholder="" />

                    <Button type="button" value="Iniciar Sesion" handlerClick={handlerClick} />
                    <Link className="link" to="/register">Regístrarse</Link>
                </form>

            </div>
            
        // </div>
        
    );
}

export default FormLogin;