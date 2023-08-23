import './TopBar.css';
import { ReactComponent as MenuIcon } from "../../assets/icons/menu-icon.svg";
import { TopBarProps } from '../../types/TopBarProps';
import { Outlet } from 'react-router';
import { useMsal } from '@azure/msal-react';
import { RedirectRequest } from '@azure/msal-browser';
import Button from '../button/Button';

const TopBar: React.FC<TopBarProps> = (props: TopBarProps) => {
	const { instance } = useMsal();
	const redirectStartPage = process.env.REACT_APP_DEV_URI;

	const request: RedirectRequest = {
		scopes: [],
		redirectStartPage: redirectStartPage,
	};

	const logoutHandler = () => {
		try {
			instance.logoutRedirect(request);
		} catch (e) {
			console.log(e);
			alert("There was a problem logging you out. Press F12 for more details.");
		}
	};
	return (
		<div className='top-bar-wrapper-container'>
			<nav className='top-bar-container'>
				<div className='menu-left'>
					{
						/*
						Inside this burger menu, we'll have a custom collapsible menu
						*/
					}
					<Button color='accent' cssClass='fab' icon={<MenuIcon/>}/>
					
				</div>
				<div className='menu-right'>
					<p className='topbar-username'>Signed in as {props.username}</p>
					<div>
						<Button
							title="Sign out"
							color="secondary"
							onClick={() => logoutHandler()}
						/>
					</div>
				</div>
			</nav>
			<Outlet />
		</div>
	);
};

export default TopBar;