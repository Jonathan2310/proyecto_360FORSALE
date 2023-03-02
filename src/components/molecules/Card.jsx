import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import styled from "styled-components";

function Card({ img, subtitle, ruta }) {
    return ( 
        <StyledCard>
            <figure>
                <img src={img} alt="Foto del inmueble" />
            </figure>
            <div className="contenido">
                <h3>{subtitle}</h3>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nihil quod rerum quaerat tenetur accusamus placeat ut at nemo optio laboriosam totam quis temporibus nostrum aliquid, perspiciatis dolor minima modi.</p> */}
                <Link className='btn_editar' to={ruta}>Editar publicación</Link>
            </div>
        </StyledCard>
     );
}

const StyledCard = styled.div`
    /* height: 400px; */
    width: 25%;
    border-radius: 10px;
    overflow: hidden;
    background-color: #ebf5ff;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
    transition: all .4s ease;
    &:hover{
        box-shadow: 5px 5px 20px rgba(0,0,0,0.4);
        transform: translateY(-3%);
    }
    img{
        width: 100%;
        height: 225px;
    }
    .contenido{
        padding: 15px;
    }
    .contenido h3{
        font-family: 'Hepta Slab';
        font-weight: 600;
        margin-bottom: 2rem;
    }
    .contenido .btn_editar{
        width: 92%;
        font-family: 'Harmattan';
        text-decoration: none;
        font-size: 1.3rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 1.5rem;
        display: inline-block;
        padding: 9px;
        color:#5CAEFF;
        border: 2px solid #5CAEFF;
        border-radius: 20px;
        transition: all .4s ease;
    }
    .contenido .btn_editar:hover{
        background: #5CAEFF;
        color: white;
    }
`

export default Card;