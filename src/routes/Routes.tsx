import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Test from "../pages/login/Test";

const RoutesContainer: React.FC = () => {
	return(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/test" element={<Test />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesContainer;