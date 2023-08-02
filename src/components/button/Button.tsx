import { ButtonProps } from "../../types/ButtonProps";
import "./Button.css";

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
	return (
		<button type="button" className={`button-${props.color}`}onClick={props.onClick}>
			{props.title}
		</button>
	);
};

export default Button;
