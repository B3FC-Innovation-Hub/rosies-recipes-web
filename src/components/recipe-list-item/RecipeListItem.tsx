import { ReactComponent as CheckIcon } from "../../assets/icons/check-icon.svg";
import { ReactComponent as InProgressIcon } from "../../assets/icons/in-progress-icon.svg";
import { RecipeListItemProps } from "../../types/RecipeListItemProps";
import "./RecipeListItem.css";

/**
 * The RecipeListItem will be displayed while the user is already ccoking. 
 * It will display the step, for example 'Peel the onions', and if the step was clear or not.
 */

const RecipeListItem: React.FC<RecipeListItemProps> = (
	props: RecipeListItemProps
) => {
	return (
		<div className="recipe-list-item-container">
			<p>{props.step}</p>
			{props.cleared ? <CheckIcon /> : <InProgressIcon />}
		</div>
	);
};

export default RecipeListItem;
