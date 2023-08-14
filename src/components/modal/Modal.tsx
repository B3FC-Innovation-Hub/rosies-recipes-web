import { ModalProps } from "../../types/ModalProps";
import Button from "../button/Button";
import "./Modal.css";
import { ReactComponent as CloseIcon } from '../../assets/icons/close-icon.svg';
import { useState } from "react";

/**
 * This is a reusable modal component that can accept jsx elements as children
 */

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
	//Default to false so that the modal is always visible when props.toggable is false. 
	const [ open, setOpen ] = useState<boolean>(true);

	const toggleModal = () => {
		setOpen(!open);
	};

	return (
		<> {
			/* If the modal is togabble, we'll render the floating button */
			open && props.toggable && 
			<div className="modal-button-wrapper">
				<Button color="accent" icon={<CloseIcon />} cssClass="fab" onClick={()=> toggleModal()}/>
			</div>
		}
		{
			open && 
				<div className={`modal-container ${props.cssClass}`}>
					<h2 className="modal-title">{props.modalTitle}</h2>
					{
					//props.children helps us to dynamically render children react components depending on our needs
					}
					<section className="modal-content-section">{props.children}</section>
				</div>
		}
		</>
	);
};

export default Modal;
