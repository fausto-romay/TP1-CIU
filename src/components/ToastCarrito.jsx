import { useEffect } from "react";

function ToastCarrito({ show, onClose, message }) {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    return (
    <div className={`toast align-items-center text-white bg-success border-0 position-fixed bottom-0 end-0 m-3 ${show ? "show" : "hide"}`} role="alert" aria-live="assertive" aria-atomic="true">
        <div className="d-flex">
            <div className="toast-body">{message}</div>
            <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                onClick={onClose}
            ></button>
        </div>
    </div>
    )
}

export default ToastCarrito;