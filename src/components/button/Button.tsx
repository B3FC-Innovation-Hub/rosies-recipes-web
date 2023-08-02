import { ButtonProps } from "../../types/ButtonProps";
import "./Button.css";

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
	return (
		<button aria-label="cta button" type="button" className={`button ${props.color} ${props.cssClass ?? ''}`} onClick={props.onClick}>
			{
				props.icon && <img className="btn-icon" src={props.icon} alt="an icon"/>
			}
			<h4>{props.title ?? <></>}</h4>
		</button>
	);
};

export default Button;
