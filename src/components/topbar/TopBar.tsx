import './TopBar.css';
import { ReactComponent as MenuIcon } from "../../assets/icons/menu-icon.svg";
import { ReactComponent as AboutIcon } from "../../assets/icons/about-icon.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home-icon.svg";
import { ReactComponent as ReloadIcon } from "../../assets/icons/reload-icon.svg";

const TopBar: React.FC = () => {
	return (
		<nav className='top-bar-container'>
			<div className='menu-left'>
				<MenuIcon className='topbar-icon' fill='white'/>
			</div>
			<div className='menu-right'>
				<AboutIcon className='topbar-icon' fill='white'/>
				<HomeIcon className='topbar-icon' fill='white'/>
				<ReloadIcon className='topbar-icon' fill='white'/>
			</div>
		</nav>
	);
};

export default TopBar;