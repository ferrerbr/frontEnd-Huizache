import Boton from '../Boton/Boton';
import './Card.css'
import FavoriteIcon from '@mui/icons-material/Favorite';

const Card = ({fotografia, nombre,descripcion,precio})=>{
    let direccion = `gorras/${fotografia}.jpeg`

    return(
        <>
            <div className='card-container'>
                <div className='me-gusta'>
                    <FavoriteIcon style={{color:"gray",scale:"1.2"}}/>
                </div>
                <img src={direccion} alt="imagen-gorrra"  className='imagen-card'/>
                <p>{nombre} - {descripcion}</p>
                <p>$ {precio}</p>
                <div className='boton-comprar'>
                    <Boton texto = "Comprar" />
                </div>

                
            </div>
        </>
    )
}

export default Card