import { LoadingBarProps } from '../../types/LoadingBarProps';
import './LoadingBar.css';

const LoadingBar: React.FC<LoadingBarProps> = (props: LoadingBarProps) => {
	return (
		<div className="loading-bar-container">
			<p>{props.recipeName}</p>
			<div className='loading-bar-wrapper'>
				<div className='loading-progress' style={{
					width: `${props.progressPercent?.toString()}%`
				}}>
				</div>
			</div>
		</div>
	);
};

export default LoadingBar;