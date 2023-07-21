import "./Sphere.css";
import { SphereProps } from "../../models/SphereProps";

const Sphere: React.FC<SphereProps> = (props: SphereProps) => {
	return (
		<span
			className="sphere"
			style={{
				backgroundColor: props.backgroundColor,
				width: props.width,
				height: props.height,
				bottom: `${props.bottom}%`,
				top: `${props.top}%`,
				left: `${props.left}%`,
				right: `${props.right}%`,
			}}
		>
			{!props.src ? (
				<></>
			) : (
				<img
					src={props.src}
					alt="A cutting board with veggies on top"
					className="food"
					width={`${props.width} px`}
					height={`${props.height} px`}
				/>
			)}
		</span>
	);
};

export default Sphere;
