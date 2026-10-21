interface ImgProp {

    Imagen : string;
    ErrImg : string;

}

function Img({ Imagen, ErrImg } : ImgProp) {
    return (
        <img
            className = 'Img'
            src = {Imagen}
            alt = {ErrImg}
        />
    )
} export default Img