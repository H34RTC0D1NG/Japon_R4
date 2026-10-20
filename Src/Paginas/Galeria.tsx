import { FaPersonHiking } from 'react-icons/fa6'
import Img from '../Componentes/Moleculas/Img'
import '../Css/Seccion_3.css'

function Galeria() {
    return (
        <section className = 'temporal' id = 'Galeria'>
            <div className = 'wrap'>
                <div className = 'encabezado'>
                    <p className = 'etiqueta'>
                        <FaPersonHiking /> De la Costa a la Montaña
                    </p>
                    <h2 className = 'titulo'>Galeria</h2>
                    <p className = 'texto'>
                        Una muestra de paisajes y lugares que japon tiene para ofrecer.
                    </p>
                </div>

                <div className = 'galeria'>
                    <div className = 'item'>
                        <Img
                            Imagen = 'https://drive.google.com/thumbnail?id=1Wj4bbg-7ul70mQ6IWYAkEnRxAp80x8Ot&sz=w1000'
                            ErrImg = 'Imagen no encontrada'
                        />
                    </div>
                    <div className = 'item'>
                        <Img
                            Imagen = 'https://drive.google.com/thumbnail?id=1cgIG1ORJ_RpmIppHwGtQq_z2IVbwA67l&sz=w1000'
                            ErrImg = 'Imagen no encontrada'
                        />
                    </div>
                    <div className = 'item'>
                        <Img
                            Imagen = 'https://drive.google.com/thumbnail?id=1WpQso8WQgDOSeUvTQgv9-O1pAkBgR-x_&sz=w1000'
                            ErrImg = 'Imagen no encontrada'
                        />
                    </div>
                    <div className = 'item'>
                        <Img
                            Imagen = 'https://drive.google.com/thumbnail?id=1e7SH3RfkumeCcnmE3EjHUDYkvp3mRgy9&sz=w1000'
                            ErrImg = 'Imagen no encontrada'
                        />
                    </div>
                    <div className = 'item'>
                        <Img
                            Imagen = 'https://drive.google.com/thumbnail?id=1VQS7bW2yy0QHXrsYh0TdnxTEdaBJrvgs&sz=w1000'
                            ErrImg = 'Imagen no encontrada'
                        />
                    </div>
                    <div className = 'item'>
                        <Img
                            Imagen = 'https://drive.google.com/thumbnail?id=1OXDms_fEFwRnrfUMbke9FMAmVKeHWPXN&sz=w1000'
                            ErrImg = 'Imagen no encontrada'
                        />
                    </div>
                    <div className = 'item'>
                        <Img
                            Imagen = 'https://drive.google.com/thumbnail?id=1_NDLuxNMSUAkKPj6pPgCz_tqG96UKqS_&sz=w1000'
                            ErrImg = 'Imagen no encontrada'
                        />
                    </div>
                    <div className = 'item'>
                        <Img
                            Imagen = 'https://drive.google.com/thumbnail?id=1HqBg2Nw5eM-T9vXuGOXz8bGRX3tcyhUO&sz=w1000'
                            ErrImg = 'Imagen no encontrada'
                        />
                    </div>
                    <div className = 'item'>
                        <Img
                            Imagen = 'https://drive.google.com/thumbnail?id=1i_3wgj9-QDuWiUf1hxIYUEEtuNsfSE7q&sz=w1000'
                            ErrImg = 'Imagen no encontrada'
                        />
                    </div>
                    <div className = 'item'>
                        <Img
                            Imagen = 'https://drive.google.com/thumbnail?id=1rr82TmlPxxjAZJS5i96Zx6M3m87bBtN2&sz=w1000'
                            ErrImg = 'Imagen no encontrada'
                        />
                    </div>
                    <div className = 'item'>
                        <Img
                            Imagen = 'https://drive.google.com/thumbnail?id=11l1GTFhsinL1DCLFDsgQ8SWTq4j6lCHA&sz=w1000'
                            ErrImg = 'Imagen no encontrada'
                        />
                    </div>
                    <div className = 'item'>
                        <Img
                            Imagen = 'https://drive.google.com/thumbnail?id=1nk0puafFRSA6a3Qm6EzgbbI31WYfHfJY&sz=w1000'
                            ErrImg = 'Imagen no encontrada'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
} export default Galeria