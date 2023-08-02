import { LoadingBarProps } from '../../types/LoadingBarProps';
import './LoadingBar.css';


/**
 * I did not pass the css classname directly through props since it depends conditionally of whether the 
 * progress is complete or not .
 */
const LoadingBar: React.FC<LoadingBarProps> = (props: LoadingBarProps) => {
	return (
		<div className="loading-bar-container">
			<p>{props.recipeName}</p>
			<div className='loading-bar-wrapper'>
				
				<div className={props.progressPercent !== 100 ? 'loading-progress' : 'loading-complete'} style={{
					width: `${props.progressPercent?.toString()}%`
				}}>
				</div>
			</div>
		</div>
	);
};

export default LoadingBar;