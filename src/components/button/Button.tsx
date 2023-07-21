import { ButtonProps } from "../../models/ButtonProps";
import "./Button.css";

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
	return (
		<button type="button" className={props.isGreen ? "button-green" : 'button-pink'}onClick={props.onClick}>
			{props.title}
		</button>
	);
};

export default Button;
