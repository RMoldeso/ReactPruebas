import { motion } from "motion/react"
import "./ModalInfo.css"; 

// eslint-disable-next-line react/prop-types
const ModalInfo = ({ visible, message, type = "success", onClose }) => {
    if (!visible) {
        return null;
    }
    const modalClass = type === "success" ? "modal-success" : "modal-error";
return (
        <div className={`modal ${modalClass}`}>
            <motion.div
               className="modal-content"
               initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <div>
                    <p>{message}</p>
                </div>
                <button
                    className="close-btn-success"
                    onClick={onClose}>
                    X
</button>
            </motion.div>
        </div>
    );
};

export default ModalInfo;