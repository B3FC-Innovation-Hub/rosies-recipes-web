import './TopBar.css';
import menu from '../../assets/icons/icons8-menu-50.png';
import help from '../../assets/icons/icons8-help-50.png';
import home from '../../assets/icons/icons8-home-50.png';
import reload from '../../assets/icons/icons8-reload-50.png';

const TopBar: React.FC = () => {
	return (
		<nav className='top-bar-container'>
			<div className='menu-left'>
				<img src={menu} alt='hamburger menu' width={32} height={32}/>
			</div>
			<div className='menu-right'>
				<img className='topbar-icon' src={help} width={32} height={32} alt='A help button'/>
				<img className='topbar-icon'  src={home} width={32} height={32} alt='A home button'/>
				<img className='topbar-icon'  src={reload} width={32} height={32} alt='A reload button'/>
			</div>
		</nav>
	);
};

export default TopBar;