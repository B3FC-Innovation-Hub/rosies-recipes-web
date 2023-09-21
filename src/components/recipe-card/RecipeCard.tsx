import "./RecipeCard.css";
import papitas from "../../assets/food-assets/papitas.jpg";
import { FlagProps } from "../../types/FlagProps";
import Flag from "../flags/Flag";
import React, { useState } from "react";

const RecipeCardComponent: React.FC = () => {
	const [ selected, setSelected ] = useState<boolean>(false);

	const toggleSeleted = () =>{
		setSelected(!selected);
		return selected;
	};


	const dummyFlagArray: FlagProps[] = [
		{
			color: "#20407a",
			flagText: "Easy",
		},
		{
			color: "#207a2c",
			flagText: "Vegetarian",
		},
		{
			color: "#55207a",
			flagText: "Side",
		},
	];
	return (
		<div className={`recipe-card-container ${selected ? 'selected': ''}`} onClick={()=> toggleSeleted()}>
			<div className="content-wrapper">
				<span>
					<img
						src={papitas}
						width={"200px"}
						height={"150px"}
						alt="Very delicious papas bravas"
					/>
				</span>
				<h2 className="recipe-card-header">Papas Bravas</h2>
				<div className="flags-container">
					{dummyFlagArray.map((value, index) => {
						return (
							<React.Fragment key={index}>
								<Flag color={value.color} flagText={value.flagText} />
							</React.Fragment>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default RecipeCardComponent;
