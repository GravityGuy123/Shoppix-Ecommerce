import { ReactNode } from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode
}


export default function Modal({isOpen, onClose, children}: ModalProps) {
    if (!isOpen) return null; // Don't render if modal is closed

    return (
        <section className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0, 0, 0, 0.5)] flex justify-center items-center">
            <div className="bg-white p-7 rounded-[8px] min-w-72">
                {children}
                <button type="button" onClick={onClose} className="cursor-pointer hover:text-fuchsia-500 mt-2">Close</button>
            </div>
        </section>
    )
}