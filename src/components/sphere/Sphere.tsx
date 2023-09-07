import "./Sphere.css";
import { SphereProps } from "../../types/SphereProps";

/**
 * The Sphere component renders a sphere with a png image inside.
 * This will be used across many screens to follow our design system.
 */

const Sphere: React.FC<SphereProps> = (props: SphereProps) => {

	function parseSizeProp(size:string):string{
		size=size.startsWith('sphere-')?size.slice(7):size;
		if(!['micro','xsmall','small','medium','large','big','xlarge'].includes(size)){
			console.warn("Not a recognized size for Spheres: "+size);
			return 'large';
		}
		return size;
	}
	return (
		<span
			className={`sphere ${parseSizeProp(props.size)}`}
		>
			{!props.img ? (
				<></>
			) : (
				<img
					src={props.img}
					alt="A cutting board with veggies on top"
					className="food"
				/>
			)}
		</span>
	);
};

export default Sphere;
