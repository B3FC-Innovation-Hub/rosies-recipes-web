import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import Input from "../../components/input/Input";
import TopBar from "../../components/topbar/TopBar";
import "./Upload.css";

const UploadPageFC: React.FC = () => {
	return (
		<div className="wrapper">
			<TopBar />
			<div className="upload-container">
				<div className="upload-container-content">
					<h1 className="upload-header">Let the good food begin</h1>
					<p className="upload-content">
            Did you bring your uwn recipes with you? Then you are in the right
            place . You can paste the url of your recipe or paste a whole recipe
            on the text boxes below.
					</p>
					<div className="upload-inputs-wrappper">
						<div className="upload-input">
							<Input multiline={false} placeholder="Paste recipe url here" />
						</div>
						<div className="upload-input">
							<Input multiline={true} placeholder="Paste your recipe here" />
						</div>
					
					</div>
					<div className="upload-button-wrapper">
						<Button title="Upload" color="pink" />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default UploadPageFC;
