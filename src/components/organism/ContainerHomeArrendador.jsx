import Button from "../atoms/Button";
import Title from "../atoms/Title";
import '../../assets/styles/homeArrendador.css'

function ContainerHomeArrendador() {
    return ( 
        <>
            <div className="cover-home_arrendador">
                <Title>VENDER TU INMUEBLE CON NOSOTROS AHORA ES MÁS FACÍL</Title>
                <button className="btn_homeArrendador">Comenzar a vender</button>
            </div>
            <div className="caption-home_arrendador">
                <h3>NOSOTROS NOS ENCARGAMOS DE ENCONTRAR A TU PROXIMO ARRENDATARIO</h3>
            </div>
        </>
        
     );
}

export default ContainerHomeArrendador;