import { FlagProps } from "./FlagProps";

export type ReipeCardProps = {
/**
 * For now we are using images like this import papitas from "../../assets/food-assets/papitas.jpg";
 * but this will come from the backend as a string 
 */
    img: string;
    title: string;
    flags: FlagProps[];
}