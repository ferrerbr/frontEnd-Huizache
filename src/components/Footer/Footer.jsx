import './Footer.css'
import {Link} from 'react-router-dom'
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Logo from '../logo/Logo';

const Footer = ()=>{
    return (
        <>
        <div className='footer'>
            <div className='footer-container'>
                <div className='container-informacion'>

                    <div className='sobre-nosotros'>
                        <h2>Sobre nosotros</h2>
                        <ul>
                            <li>
                                <Link to='/about-us' style={{color:"white",textDecoration:"none"}}>  
                                    Acerca de nosotros
                                </Link></li>
                            <li>
                                <Link to='/about-us' style={{color:"white",textDecoration:"none"}}>  
                                    Mision, vision, valores
                                </Link></li>
                            <li>
                                <Link to='/our-story' style={{color:"white",textDecoration:"none"}}>  
                                    Huizache una empresa Méxicana
                                </Link> </li>
                        </ul>
                    </div>

                    <div className='Explora'>
                        <h2>Explora</h2>
                            <ul>
                                <li>
                                    <Link to='/products/men' style={{color:"white",textDecoration:"none"}}>  
                                        Hombres
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/products/women' style={{color:"white",textDecoration:"none"}}>  
                                        Mujeres
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/products/kids' style={{color:"white",textDecoration:"none"}}>  
                                        Niños
                                    </Link>
                                </li>
                            </ul>
                    </div>

                    <div className='Necesitas ayuda' >
                        <h2>¿Necesitas ayuda?</h2>
                            <ul>
                               <li>
                                    <Link to='/contact-us' style={{color:"white",textDecoration:"none"}}>  
                                        Centro de ayuda
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/contact-us' style={{color:"white",textDecoration:"none"}}>  
                                        Contactanos
                                    </Link> 
                                </li>
                                <li>
                                    <Link to='/acount/login' style={{color:"white",textDecoration:"none"}}>  
                                        Estatus de tu orden
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/acount/login' style={{color:"white",textDecoration:"none"}}>  
                                        Login
                                    </Link>
                                </li>
                            </ul> 
                    </div>
                    
                    
                </div>
                <div className='redes-sociales'>
                    <h3>Siguenos en redes sociales</h3>
                    <div >
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{color:"white",textDecoration:"none"}}>
                            <InstagramIcon className='iconos-redesSociales' />
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{color:"white",textDecoration:"none"}}>
                            <FacebookIcon className='iconos-redesSociales'/>
                        </a>
                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer" style={{color:"white",textDecoration:"none"}}>
                            <XIcon className='iconos-redesSociales'/>
                        </a>
                        <a href="https://mx.pinterest.com/" target="_blank" rel="noopener noreferrer" style={{color:"white",textDecoration:"none"}}>
                            <PinterestIcon className='iconos-redesSociales'/>
                        </a>
                    </div>

                </div>
                <div className='copiright'>
                    <Logo />
                    <p>© 2024 Huizache</p>
                    <a href="#" target="_blank" rel="noopener noreferrer" style={{color:"white",}} onClick={(e)=>e.preventDefault()}>
                        <p>terminos y condiciones </p>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" style={{color:"white",}} onClick={(e)=>e.preventDefault()}>
                        <p>politica de privacidad</p>
                    </a>

                </div>
            </div>

        </div>

        </>
    )
}

export default Footer;