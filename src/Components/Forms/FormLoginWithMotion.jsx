import { motion } from "motion/react";
import ModalInfo from "../Modals/ModalInfo.jsx";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsername, setEmail, setPassword } from "../../store/form/formSlice.js";


const FormWithMotionAndHook = ({ titleForm }) => {
    const dispatch = useDispatch();
    const { module, username, email, password } = useSelector((state) => state.form);

    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState("success"); // Estado para el tipo de modal

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "username") dispatch(setUsername(value));
        if (name === "email") dispatch(setEmail(value));
        if (name === "password") dispatch(setPassword(value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid =
            username === "romoldes" &&
            email === "moldesrodrigor@gmail.com" &&
            password === "mod7USIP-RODRIMOLDES";

        if (isValid) {
            setModalType("success"); // Modal verde
            setShowModal(true);
            console.log("¡Logeado con éxito!");
        } else {
            setModalType("error"); // Modal rojo
            setShowModal(true);
            console.log("Error: Datos incorrectos");
        }
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
                message={modalType === "success" ? "¡Logeado con éxito!" : "Error: Datos incorrectos"}
                type={modalType}
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
                                disabled
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
