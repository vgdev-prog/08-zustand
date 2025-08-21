"use client"
import css from './Modal.module.css';
import {createPortal} from "react-dom";
import {ReactNode} from "react";
import {useRouter} from "next/navigation";

interface ModalProps {
    children?: ReactNode;
    onCloseModal?: () => void;
}

const Modal = ({children, onCloseModal}: ModalProps) => {
    const router = useRouter();
    
    const handleCloseModal = () => {
        if (onCloseModal) {
            onCloseModal();
        } else {
            router.back();
        }
    };
    
    const handleModalClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    
    return createPortal(
        <div
            className={css.backdrop}
            role="dialog"
            aria-modal="true"
            onClick={handleCloseModal}
        >
            <div className={css.modal} onClick={handleCloseModal}>
                {children}
            </div>
        </div> as ReactNode,
        document.body
    );
};
export default Modal