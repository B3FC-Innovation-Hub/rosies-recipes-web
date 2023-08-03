import { ReactComponentElement } from "react";

/**
 * The properties of our custom button component.
 */

export type ButtonProps = {
    title: string;
    onClick?: () => void | Promise<any>; // optional, but recommended to handle async operations
    //For the places where we will use green buttons
    color: string;
    /*To specify a certain specific type of button. So far the only parameter accepted is 'fab', 
    but if we want to implement different types of buttons 
    we'll implement them by passing this css class as prop */
    cssClass?: string;
    /**
     * Since we are using SVG and React has buuilt it support for this format,
     * we can import and render SVGs just as any other React Component
     */
    icon?: ReactComponentElement<any, any>;
}