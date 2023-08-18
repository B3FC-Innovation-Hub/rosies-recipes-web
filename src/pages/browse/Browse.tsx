import RecipeCardComponent from '../../components/recipe-card/RecipeCard';
import './Browse.css';

const BrowsePageFC: React.FC = () => (
	<div className='browse-container'>
		Browse
		<RecipeCardComponent/>
	</div>
);

export default BrowsePageFC;