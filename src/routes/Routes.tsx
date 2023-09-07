import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPageFC from "../pages/login/Login";
import HomePageFC from "../pages/home/Home";
import React from "react";
import TopBar from "../components/topbar/TopBar";
import { useMsal } from "@azure/msal-react";

const RoutesContainer: React.FC = () => {
	//To pass the username of the logged account, if it exists

	const { accounts } = useMsal();
	return(
		<BrowserRouter>	
			<Routes>
				<Route index path="/" element={<LoginPageFC />} />
				<Route element={<TopBar username={accounts[0]?.username}/>}>
					<Route path="/home" element={<HomePageFC />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesContainer;