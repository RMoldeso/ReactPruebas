import { motion } from "motion/react";
import ModalInfo from "../Modals/ModalInfo.jsx";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsername, setEmail, setPassword } from "../../store/form/formSlice.js";


const FormWithMotionAndHook = ({ titleForm }) => {
    const dispatch = useDispatch();
    const { module, username, email, password } = useSelector((state) => state.form);

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState(""); 
    const [isError, setIsError] = useState(false); 

    
    const validateForm = () => {
        const validUsername = "romoldes"; // Valores válidos predefinidos
        const validEmail = "moldesrodrigor@gmail.com";
        const validPassword = "mod7USIP-RODRIMOLDES";

        const isValid =
            username === validUsername &&
            email === validEmail &&
            password === validPassword;

        console.log("Validación de formulario:", { username, email, password, isValid });
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "username") dispatch(setUsername(value));
        if (name === "email") dispatch(setEmail(value));
        if (name === "password") dispatch(setPassword(value));
    };

   
    const handleSubmit = (e) => {
        e.preventDefault();

      
        if (validateForm()) {
            console.log("Datos correctos, mostrando mensaje de éxito");
            setModalMessage("¡Bienvenido romoldes!"); // Mensaje de éxito
            setIsError(false);
        } else {
            console.log("Datos incorrectos, mostrando mensaje de error");
            setModalMessage("Error: Username/Password incorrectos."); // Mensaje de error
            setIsError(true);
        }

        setShowModal(true); // Mostrar el modal
    };

    const onCloseModalInfo = () => {
        setShowModal(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ModalInfo
                visible={showModal}
                message={modalMessage} // Mostrar el mensaje correspondiente
                isError={isError} // Pasar si es un error o no
                onClose={onCloseModalInfo}
            />
            <form onSubmit={handleSubmit}>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3>{titleForm}</h3>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Module:
                            <input
                                type="text"
                                name="module"
                                value={module}
                                disabled // Deshabilitar edición del campo
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Password:
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <button type="submit">Enviar</button>
                </motion.div>
            </form>
        </motion.div>
    );
};

export default FormWithMotionAndHook;

