import { FlagProps } from '../../types/FlagProps';
import './Flag.css';

/**
 * This component renders a component that we'll use to flag recipes
 * for example 'vegetarian', 'gluten free', etc.
 */

const Flag: React.FC<FlagProps> = (props: FlagProps) => {
	return (
		<div className='flag-container' style={{
			backgroundColor: props.color
		}}>
			<h4>{props.flagText}</h4>
		</div>
	);
};

export default Flag;