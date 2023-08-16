import React from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import useBreakpoint from "use-breakpoint";
import "./Upload.css";
import { BREAKPOINTS } from "../../context/constants/Breakpoints";

const UploadPageFC: React.FC = () => {
	/*
	A React hook (>=16.8) for getting the current responsive media breakpoint, successor to breakpoint-observer.
	*/
	const { breakpoint} = useBreakpoint(
		BREAKPOINTS,
		//Default breakpoint value
		"desktop"
	);

	return (
		<div className="upload-wrapper">
			<div className={`upload-container ${breakpoint}`}>
				<div className="upload-container-content">
					<h1 className="upload-header">Let the good food begin</h1>
					<p className="upload-content">
            Did you bring your own recipes with you? Then you are in the right
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
						<Button title="Upload" color="accent" />
					</div>
				</div>
				<div className="upload-progress-wrapper">
					{
						/*
						We'll render the upload progress here
						*/
					}
				</div>
			</div>
		</div>
	);
};

export default UploadPageFC;
