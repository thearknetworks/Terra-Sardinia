import React, { useEffect, useState } from 'react';

const Modal = ({ isOpen, closeModal, imageSrc }) => {
    const [visible, setVisible] = useState(false);

    // Handle smooth opening
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setVisible(true), 10);
        } else {
            setVisible(false);
        }
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    if (!isOpen) return null; // Don't render if it's closed

    return (
        <div className={`modal-overlay ${visible ? "show" : ""}`} onClick={closeModal}>
            <div className={`modal-content ${visible ? "active" : ""}`} onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={closeModal}>×</button>
                <img src={imageSrc} alt="Modal content" className="modal-image" />
            </div>
        </div>
    );
};

export default Modal;
