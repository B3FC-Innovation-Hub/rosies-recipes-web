import { ReactComponentElement } from "react";

export type ButtonProps = {
    title?: string;
    onClick?: () => void | Promise<void>; // optional, but recommended to handle async operations
    //To specify which color the button will be
    color: string;
    cssClass?: string;
    icon?: ReactComponentElement<any, any>;
}