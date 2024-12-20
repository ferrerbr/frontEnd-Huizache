import Boton from '../Boton/Boton';
import './MiniCard.css'
import FavoriteIcon from '@mui/icons-material/Favorite';

const MiniCard = ({fotografia,precio,className})=>{
    let direccion = `gorras/${fotografia}.jpeg`

    return(
        <>
            <div className={`miniCard-container ${className}`}>
                <div className='me-gusta'>
                    <FavoriteIcon style={{color:"gray"}}/>
                </div>
                <img src={direccion} alt="imagen-gorrra"  className='imagen-miniCard'/>
                <div className='boton-comprar'>
                    <Boton texto = "Comprar" />
                </div>

                
            </div>
        </>
    )
}

export default MiniCard