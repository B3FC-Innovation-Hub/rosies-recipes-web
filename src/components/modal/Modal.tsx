import { ModalProps } from "../../types/ModalProps";
import Button from "../button/Button";
import "./Modal.css";
import { ReactComponent as CheckIcon} from '../../assets/icons/check-icon.svg';

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
	return (
		<>
			<div className={`modal-container ${props.cssClass}`}>
				{props.toggable && (
					<div className="modal-button-wrapper">
						<Button color="pink" icon={<CheckIcon />} cssClass="fab" />
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
