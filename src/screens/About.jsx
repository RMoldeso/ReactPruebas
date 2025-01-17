import { useSelector } from 'react-redux'
import { useState } from 'react';

const About = () => {
    //los hooks en react son funciones ya definidas
    //los hooks es siempre tienen el prefijo use
    //hook useState, use Effect, use Context, use Ref, use Transition
    //es posible crear nuetros propios hooks: useService, useImage, useForm
    //el hook useState me permite manejar variaable de estado
    const [ nameComponent, setNameComponent ] = useState('About');

    const count = useSelector((state) => state.product.initialValue);
 
    const producto = useSelector((state) => state.product.dataProduct)
    return (
        <>
            <p>Component {nameComponent} </p>
            <button onClick={() => {setNameComponent('Curso de React')}}>Press</button>
            <br />
            <span>Valor inicial es { count }</span>
            <br />
            <br />
            <span>Las tablas de los datos son:</span>
            <ul>
                { producto.map(p =>(
                    <li key={p.category}>{p.category}{' '}{p.price}{' '}{p.stocked}{' '}{p.name}</li>
                ))}
 
            </ul>
           
            
      
        </>
    );
}
export default About;

// <span>Valor de Dataproduct es { producto }</span>