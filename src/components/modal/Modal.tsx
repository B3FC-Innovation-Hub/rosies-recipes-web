import { ModalProps } from "../../types/ModalProps";
import Button from "../button/Button";
import "./Modal.css";
import { ReactComponent as CloseIcon } from '../../assets/icons/close-icon.svg';

/**
 * This is a reusable modal component that can accept jsx elements as children
 */

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
	return (
		<>
			<div className={`modal-container ${props.cssClass}`}>
				{props.toggable && (
					<div className="modal-button-wrapper">
						<Button color="accent" icon={<CloseIcon />} cssClass="fab" />
					</div>
				)}
				<h2 className="modal-title">{props.modalTitle}</h2>
				{
					//props.children helps us to dynamically render children react components depending on our needs
				}
				<section className="modal-content-section">{props.children}</section>
			</div>
		</>
	);
};

export default Modal;
