import Button from "../atoms/Button";
import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import Logo from '../../assets/img/logoSinFondo.png'

import '../../assets/styles/formRegister.css'

function FormRegister() {
    return ( 
        // <div className="contenedor_form">
            <div className="form_register">
                <Title>Registro</Title>
                <img src={Logo} alt="Logo de la empresa" className="logo_register" />
                <form>
                    <WrapperInput msn="Nombre(s)" type="text" placeholder="Escriba su nombre de usuario" />
                    <WrapperInput msn="Apellido(s)" type="text" placeholder="Escriba su contraseña" />
                    <WrapperInput msn="Telefono" type="number" placeholder="Escriba su nombre de usuario" />
                    <WrapperInput msn="Direccion" type="text" placeholder="Escriba su contraseña" />
                    <WrapperInput msn="Correo" type="E-mail" placeholder="Escriba su nombre de usuario" />
                    <WrapperInput msn="Password" type="password" placeholder="Escriba su contraseña" />

                    <Button type="button" value="Registrarse"/>
                </form>
                
            </div>
            
        // </div>
        
    );
}

export default FormRegister;