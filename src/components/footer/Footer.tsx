import "./Footer.css";

/**
 * In order to use Icons8 icons for free, we have to include this tiny footer with a link to their page
 */

const Footer: React.FC = () => {
	return (
		<footer className="footer-container">
			Icons + illustrations by :
			<a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a>
		</footer>
	);
};

export default Footer;
