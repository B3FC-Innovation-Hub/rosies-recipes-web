import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

const Upload: React.FC = () => {
	const navigate = useNavigate();
	return (
		<div>
			<h1>
            Upload
			</h1>
			<Button title="Upload" isGreen={false} onClick={() => navigate('/')}/>
			<Button title="Browse" isGreen={false} onClick={() => navigate('/')}/>
		</div>
	);
};

export default Upload;