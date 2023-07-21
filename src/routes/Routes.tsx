import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Upload from "../pages/upload/Upload";

const RoutesContainer: React.FC = () => {
	return(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/upload" element={<Upload />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesContainer;