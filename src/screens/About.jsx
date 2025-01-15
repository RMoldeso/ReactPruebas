import {useState} from 'react'; 
const About = () => {

    const [nameComponent, setNameComponent] = useState('About');
    return (
        <>
           <p>Component name: {nameComponent}</p>
            <button onClick={() => {setNameComponent('Curso de React')}}>Press</button>
        </>
    );
}

export default About;