import TittleA from "../atoms/TittleA"
import SubtitleA from '../atoms/SubTittleA'
import ImgEditarPublicacion from '../../assets/img/EditarPublicacion.svg'
import '../../assets/styles/wrapperEditar.css'


function WrapperEditar() {
    return ( 
        <>
            <div className='container_editarpublicacion'>
                <TittleA>Editar Publicacion</TittleA>
                <div className='section_editar'>
                    <div className='cuerpo_editar'>
                        <img className="ImgEditar" src={ImgEditarPublicacion} alt="imagen de su inmobiliario" />
                    </div>
                    <div className='cuerpo_editar'>
                        <div className='direcion'>
                            <div>
                                <SubtitleA>Direccion:</SubtitleA>
                            </div>
                        </div>
                        <div className='precio'>
                            <div>
                                <SubtitleA>Precio:</SubtitleA>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section_editar">
                    <div className='cuerpo2_editar'>
                        <div className='descripcion'>
                            <div>
                                <SubtitleA>Descripcion:</SubtitleA>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WrapperEditar;