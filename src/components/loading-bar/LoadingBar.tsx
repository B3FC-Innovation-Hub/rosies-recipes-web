import { LoadingBarProps } from '../../types/LoadingBarProps';
import './LoadingBar.css';

/**
 * This component will indicate the progress of the upload of a certain recipe
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