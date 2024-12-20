import './Inicio.css'

import NavBar from '../../components/NavBar/NavBar';
import BasicTextFields from '../../components/Busqueda/Busqueda';
import Carrousel from '../../components/Carrousel/Carrousel';
import Footer from '../../components/Footer/Footer';
import MiniCard from '../../components/MiniCard/MiniCard';
import Card from '../../components/Card/Card';
const portada = '/portada.jpg'

const Inicio  = ()=>{
    return(
        <>
            <NavBar/>
            <Carrousel/>
            <p className='nuevos-diseños'>Productos de temporada</p>

            <div className='nuevos-disenos'>
                <MiniCard fotografia={20} className ="nuevo--diseño"/>
                <MiniCard fotografia={22} className ="nuevo--diseño"/>
                <MiniCard fotografia={24} className ="nuevo--diseño"/>
                <MiniCard fotografia={9} className ="nuevo--diseño"/>
                <MiniCard fotografia={16} className ="nuevo--diseño"/>
            </div>
            <p className='nuevos-diseños'>Lo mas comprado</p>
            <div className='loMas-comprado'>
                <Card fotografia={2} nombre="Huizache Gorra " descripcion="Negro Carbón Clásica y resistente, perfecta para cualquier aventura." precio={400} className="top-producto"/>
                <Card fotografia={1} nombre="Laurel Gorra" descripcion="Azul Marino Elegancia y comodidad en un diseño para el día a día." precio={400} className="top-producto"/>
                <Card fotografia={5} nombre="Ceiba Gorr" descripcion="Beige Arena Ligera y versátil, inspirada en el árbol sagrado." precio={400} className="top-producto"/>

                <Card fotografia={3} nombre="Sauce Gorra"  descripcion="Verde Olivo Conecta con la naturaleza en un estilo relajado"precio={400} className="top-producto"/>
                <Card fotografia={7}nombre="Jacaranda Gorra" descripcion="Morado Lavanda Un toque floral con estilo moderno y vibrante." precio={400} className="top-producto"/>
                <Card fotografia={12} nombre="Amate Gorra" descripcion="Gris Ceniza Diseño minimalista con la fuerza de la tradición mexicana." precio={400} className="top-producto"/>

                <Card fotografia={8} nombre="Olmo Gorra" descripcion="Blanco Perla Sencillez que destaca, ideal para cualquier ocasión" precio ={399} className="top-producto"/>
                <Card fotografia={13} nombre="Tamarindo Gorra" descripcion="Marrón Tierra Tonos cálidos para quienes aman la naturaleza." precio={400} className="top-producto"/>
                <Card fotografia={15} nombre="Ahuehuete Gorra" descripcion=" Verde Bosque Inspirada en el árbol nacional, fresca y atemporal." precio={400} className="top-producto"/>
            </div>

           <br />
            <Footer/>
            
        </>
    )

}

export default Inicio ;