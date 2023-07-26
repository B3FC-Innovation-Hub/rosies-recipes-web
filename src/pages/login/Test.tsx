import Input from '../../components/input/Input';
import './Test.css';

const Test = () => {
	return (
		<div className="test-container">
			<h1>hello world</h1>
			<Input multiline={false} placeholder='Paste a recipe url'/>
			<div>asbdj.a</div>
			<Input multiline={true} placeholder='Paste a recipe'/>
		</div>
	);
};

export default Test;