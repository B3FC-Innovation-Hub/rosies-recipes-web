import { InputProps } from "../../types/InputProps";
import "./Input.css";

/**
 * This component renders a custom input or textarea , depending on the parameters passed.
 */

const Input: React.FC<InputProps> = (props: InputProps) => {
	return (
		<div className="input-container">
			{props.multiline ? (
				<textarea className="input multiline" placeholder={props.placeholder} aria-label="A text area to paste a recipe" />
			) : (
				<input className="input singleline" placeholder={props.placeholder}   aria-label="An input to paste a url" type="text" />
			)}
		</div>
	);
};

export default Input;
