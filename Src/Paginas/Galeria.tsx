import Img from '../Componentes/Moleculas/Galeria'
import { FaPersonHiking } from 'react-icons/fa6'
import '../Css/Paginas/Galeria.css'

function Galeria() {
    return (
        <section className = 'temporal' id = 'Galeria'>
            <div className = 'wrap'>
                <div className = 'encabezado'>
                    <p className = 'etiqueta'>
                        <FaPersonHiking /> De la Costa a la Montaña
                    </p>
                    <h2 className = 'titulo'>Galeria</h2>
                    <p className = 'texto'><strong>
                        Si estás pensando en viajar a Japón, te recomiendo empezar por Tokio. De noche, sus rascacielos iluminados se ven infinitos, 
                        y la Torre de Tokio, con su estructura roja y blanca, es casi obligatoria para la foto. En primavera, el río Meguro se cubre 
                        con un túnel de cerezos en flor que se refleja en el agua cuando cae la noche. Si buscas calma, el bosque de bambú de Arashiyama, 
                        en Kioto, te envuelve en un silencio verde difícil de olvidar, y sus senderos con cercas de bambú parecen sacados de otra época. 
                        Tampoco puedes perderte el monte Fuji al atardecer, cuando su cima se tiñe de rosa sobre un mar de montañas azules, ni el castillo 
                        de Matsumoto iluminado de noche, reflejado en el agua de su foso como un espejo. Y para conocer el Japón más tranquilo, vale la pena 
                        salir de las grandes ciudades: costas con rocas en forma de arco frente al mar, puentes gigantes como el Akashi Kaikyō, y pueblos pequeños 
                        con calles angostas, cables cruzando el cielo y cerros de fondo, donde se siente la vida cotidiana. Japón mezcla como pocos lugares la ciudad 
                        moderna, la naturaleza y la tradición.
                    </strong></p>
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