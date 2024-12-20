import Busqueda from '../Busqueda/Busqueda';
import Logo from '../logo/Logo';
import './NavBar.css'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';



const NavBar = ()=>{
    return(
        <>
        <div className='barra--navegacion'>
           <div className='logo--nombre'>
            <Link to="/">
                <Logo />
            </Link>
           
            <div className='nombre-huizache' style={{borderRadius:"5px"}}>
                <Link to="/" style={{color:"black",textDecoration:"none"}}>
                    <h1>Huizache</h1>
                </Link>
                
            </div>
           </div>
            <div className='categorias-generales'>
                <Link to="/products/men" style={{color:"black",textDecoration:"none"}}>
                    <h2>Hombres</h2>
                </Link>
                <Link to="/products/women" style={{color:"black",textDecoration:"none"}}>
                    <h2>Mujeres</h2>
                </Link>
                <Link to="/products/kids" style={{color:"black",textDecoration:"none"}}>
                    <h2>Niños</h2>
                </Link>
                <Link to="/products/sport" style={{color:"black",textDecoration:"none"}}>
                    <h2>Sport</h2>
                </Link>
                <Link to="/products/new-products" style={{color:"black",textDecoration:"none"}}>
                    <h2>Novedades</h2>
                </Link>

            </div>
            
            
            
            <div className='navbar--iconos'>
                <div className = 'busqueda' >
                </div>

                
                <SearchIcon className='Icono'/>
                <Link to="/wishlist" style={{color:"black",textDecoration:"none"}}>
                    <FavoriteIcon className='Icono'/>
                </Link>

                <Link to="/cart" style={{color:"black",textDecoration:"none"}}>
                    <ShoppingCartIcon className='Icono'/>
                </Link>

                <Link to="/acount" style={{color:"black",textDecoration:"none"}}>
                    <PersonIcon className='Icono'/>
                </Link>
            </div>
            

        </div> 
        
        </>
    )

}

export default NavBar;