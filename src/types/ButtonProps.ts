import { ReactElement } from "react";

export type ButtonProps = {
    title?: string;
    onClick?: () => void | Promise<void>; // optional, but recommended to handle async operations
    //To specify which color the button will be
    color: string;
    //In this case css class is pink or green.
    cssClass?: string;
    icon?: ReactElement<any, any>;
}