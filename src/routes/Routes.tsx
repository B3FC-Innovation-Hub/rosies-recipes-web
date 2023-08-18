import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPageFC from "../pages/login/Login";
import HomePageFC from "../pages/home/Home";
import React from "react";
import TopBar from "../components/topbar/TopBar";
import { useMsal } from "@azure/msal-react";
import UploadPageFC from "../pages/upload/Upload";
import BrowsePageFC from "../pages/browse/Browse";

const RoutesContainer: React.FC = () => {
	//To pass the username of the logged account, if it exists

	const { accounts } = useMsal();
	const username=(accounts[0] ? accounts[0].name || accounts[0].username || undefined : undefined) ?? "Anonymous";
	return(
		<BrowserRouter>	
			<Routes>
				<Route index path="/" element={<LoginPageFC />} />
				<Route element={<TopBar username={username}/>}>
					<Route path="/home" element={<HomePageFC />} />
					<Route path="/upload" element={<UploadPageFC />} />
					<Route path="/browse" element={<BrowsePageFC />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesContainer;
