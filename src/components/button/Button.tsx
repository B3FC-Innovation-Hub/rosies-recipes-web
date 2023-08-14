import { ButtonProps } from "../../types/ButtonProps";
import "./Button.css";

/**
 * This is a custom reusable button which can be regular or fab depending on the props received
 */

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
	return (
		<button aria-label="cta button" type="button" className={`button color-${props.color} ${props.cssClass ?? ''}`} onClick={props.onClick}>
			{
				props.icon && <div className="button-icon">{props.icon}</div>
			}
			<>{props.title ?? <></>}</>
		</button>
	);
};

export default Button;
