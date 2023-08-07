import { ButtonProps } from "../../types/ButtonProps";
import "./Button.css";

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
	return (
		<button aria-label="cta button" type="button" className={`button ${props.color} ${props.cssClass ?? ''}`} onClick={props.onClick}>
			{
				props.icon ?? <></>
			}
			<>{props.title ?? <></>}</>
		</button>
	);
};

export default Button;
