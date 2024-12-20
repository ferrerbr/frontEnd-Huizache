import './Boton.css'

const Boton = (props)=>{
    return(
        <>
        <button>
            <p>{props.texto}</p>
        </button>
        </>
    )
}

export default Boton;