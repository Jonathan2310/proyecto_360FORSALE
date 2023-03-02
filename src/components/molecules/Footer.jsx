// import Box from "../atoms/Box";
import styled from 'styled-components';
import Caption from '../atoms/Caption';
import Logo from '../../assets/img/logoSinFondo.png'
import IconFacebook from '../../assets/img/Facebook.svg'
import IconInstagram from '../../assets/img/Instagram.svg'
import IconTwitter from '../../assets/img/Twitter.svg'
import IconGmail from '../../assets/img/Gmail.svg'
import '../../assets/styles/footer.css'

function Footer() {
    return ( 
        <footer>
            <div className="grupo_1">
                <div className="box">
                    <figure>
                        <a href="#">
                            <img src={Logo} alt="Logo de 360°FOR SALE" />
                        </a>
                    </figure>
                </div>
                <div className="box">
                    <Caption msn="CATEGORIAS"></Caption>
                    <div className="container_links">
                        <a href="#" className='link'>Home</a>
                        <a href="#" className='link'>Publicar Inmuebles</a>
                        <a href="#" className='link'>Mis Inmuebles</a>
                        <a href="#" className='link'>Más información</a>
                        <a href="#" className='link'>Mi perfil</a>
                    </div>
                </div>
                <div className="box">
                    <Caption msn="SOBRE NOSOTROS"></Caption>
                    <div className="nosotros">
                        <p className='info_nosotros'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta illum sapiente voluptas natus mollitia tempore explicabo ipsum id distinctio esse error beatae quasi minus, laboriosam quibusdam facilis. Hic, ipsam ea.</p>
                        <div className="red_social">
                            <a href="#"><img src={IconFacebook} alt="Icono de Fcebook" /></a>
                            <a href="#"><img src={IconInstagram} alt="Icono de Instagram" /></a>
                            <a href="#"><img src={IconTwitter} alt="Icono de Twitter" /></a>
                            <a href="#"><img src={IconGmail} alt="Icono de Gmail" /></a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="grupo_2">
                <small>&copy; 2023 <b>360° FOR SALE</b> - Todos los derechos reservados</small>
            </div>
        </footer>
     );
}


// const StyledFooter = styled.footer`
//     width: 100%;
//     background-image: url(../../assets/img/coverFooter.png);
//     background-position: center center;
//     background-repeat: no-repeat;
//     background-attachment: fixed;
//     background-size: cover;
//     background-color: rgb(241, 248, 255);
// `

export default Footer;